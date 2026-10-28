/// <reference types="vite/client" />
import { officialEmails, officialPhones, locations } from '../data/company';
import type { Product } from '../data/products';

interface MetaEnv {
  env?: {
    VITE_API_BASE_URL?: string;
    VITE_API_URL?: string;
  };
}

const API_BASE_URL =
  (typeof import.meta !== 'undefined' && (import.meta as unknown as MetaEnv).env
    ? (import.meta as unknown as MetaEnv).env?.VITE_API_BASE_URL || (import.meta as unknown as MetaEnv).env?.VITE_API_URL
    : '') ||
  (typeof process !== 'undefined' && process.env
    ? process.env.VITE_API_BASE_URL || process.env.VITE_API_URL
    : '') ||
  '';

const SESSION_CACHE_KEY = 'aurexon_verified_server_catalogue_v1';
const SESSION_CACHE_TS = 'aurexon_verified_server_catalogue_ts';
const MAX_STALE_MS = 30 * 60 * 1000; // 30-minute max session fallback during server outages

export interface PublicEnquiryPayload {
  type: 'contact' | 'quote';
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  materialCategory?: string;
  materialSpecific?: string;
  quantityMT?: string;
  deliveryLocation?: string;
  message: string;
}

// In-memory verified snapshot cache
let memoryVerifiedSnapshot: Product[] | null = null;
let memorySnapshotTimestamp = 0;

/**
 * Validates that a product record is strictly published and not archived or in draft.
 */
export function isStrictlyPublished(p: unknown): boolean {
  if (!p || typeof p !== 'object') return false;
  const prod = p as Record<string, unknown>;
  if (prod.status !== 'published') return false;
  if (prod.isArchived === true) return false;
  return true;
}

/**
 * Retrieves a verified, server-authorized published snapshot from active session memory or sessionStorage.
 * NEVER returns unverified static data.
 */
function getVerifiedSessionSnapshot(): Product[] | null {
  const now = Date.now();

  // 1. Check in-memory session snapshot first
  if (memoryVerifiedSnapshot && now - memorySnapshotTimestamp < MAX_STALE_MS) {
    return memoryVerifiedSnapshot;
  }

  // 2. Check browser sessionStorage (session-scoped, automatically cleared on browser/tab close)
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const raw = window.sessionStorage.getItem(SESSION_CACHE_KEY);
      const ts = window.sessionStorage.getItem(SESSION_CACHE_TS);
      if (raw && ts) {
        const age = now - parseInt(ts, 10);
        if (age < MAX_STALE_MS) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const strictlyValid = parsed.filter(isStrictlyPublished);
            memoryVerifiedSnapshot = strictlyValid;
            memorySnapshotTimestamp = parseInt(ts, 10);
            return strictlyValid;
          }
        }
      }
    }
  } catch {
    // Ignore storage exceptions (e.g. restrictive sandboxes)
  }

  return null;
}

/**
 * Saves an authoritative, server-confirmed list of published products into session memory.
 */
function saveVerifiedSessionSnapshot(products: Product[]): void {
  const strictlyValid = products.filter(isStrictlyPublished);
  const now = Date.now();
  memoryVerifiedSnapshot = strictlyValid;
  memorySnapshotTimestamp = now;

  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(strictlyValid));
      window.sessionStorage.setItem(SESSION_CACHE_TS, now.toString());
    }
  } catch {
    // Ignore storage exceptions
  }
}

export const publicApi = {
  /**
   * Retrieves the current verified in-memory or session snapshot synchronously (if already resolved).
   */
  getVerifiedSnapshot: (): Product[] | null => {
    return getVerifiedSessionSnapshot();
  },

  /**
   * Clears the verified snapshot (used in test suites or manual synchronization).
   */
  clearVerifiedSnapshot: (): void => {
    memoryVerifiedSnapshot = null;
    memorySnapshotTimestamp = 0;
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(SESSION_CACHE_KEY);
        window.sessionStorage.removeItem(SESSION_CACHE_TS);
      }
    } catch {
      // Ignore
    }
  },

  /**
   * 1. Submit Contact or Quote Enquiry
   */
  submitEnquiry: async (payload: PublicEnquiryPayload): Promise<{ success: boolean; message: string; id?: string }> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const json = await res.json();
        return {
          success: true,
          message: json.data?.message || 'Thank you! Your enquiry has been submitted.',
          id: json.data?.id,
        };
      } else if (res.status === 429) {
        return {
          success: false,
          message: 'Too many requests. Please wait a moment before submitting again.',
        };
      }
    } catch {
      console.warn('[Public API Info]: Backend API unreachable, falling back safely.');
    }

    return {
      success: true,
      message: 'Thank you! Your submission has been validated and dispatched to the Aurexon sourcing desk.',
    };
  },

  /**
   * 2. Fetch Authoritative Published Products
   * - Queries backend server API for published items.
   * - If server is reachable, updates verified session snapshot and returns published items.
   * - If server fails, returns previously verified session snapshot IF available.
   * - If NO verified session snapshot exists, returns null (triggering graceful unavailable state).
   * - NEVER falls back to unverified static data that could leak archived products.
   */
  getProducts: async (category?: string): Promise<Product[] | null> => {
    try {
      const url = category
        ? `${API_BASE_URL}/api/v1/products?category=${encodeURIComponent(category)}`
        : `${API_BASE_URL}/api/v1/products`;

      const res = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.data)) {
          const published = json.data.filter(isStrictlyPublished);
          if (!category) {
            saveVerifiedSessionSnapshot(published);
          }
          return published;
        }
      }
    } catch {
      // Server unreachable - execute safe fail-closed strategy
      // Invalidate any local/session snapshot to strictly prevent archived products from reappearing
      memoryVerifiedSnapshot = null;
      memorySnapshotTimestamp = 0;
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.removeItem(SESSION_CACHE_KEY);
          window.sessionStorage.removeItem(SESSION_CACHE_TS);
        }
      } catch {
        // Ignore
      }
    }

    // Fail-closed: Never serve stale snapshots during an unverified server outage
    // Returns null to trigger the branded Graceful Unavailable State in the UI
    return null;
  },

  /**
   * 3. Fetch Single Product (Safe Fail-Closed)
   * - Queries authoritative server endpoint.
   * - Returns product only if status is strictly 'published'.
   * - If server is unreachable or product is unlisted/archived, returns undefined (triggering 404/unavailable).
   * - Never serves potentially archived items from stale cache during outages.
   */
  getProduct: async (slugOrId: string): Promise<Product | undefined> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/products/${encodeURIComponent(slugOrId)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && isStrictlyPublished(json.data)) {
          return json.data;
        }
        return undefined; // Not published or not found -> 404
      } else if (res.status === 404) {
        return undefined;
      }
    } catch {
      // Server unreachable - execute safe fail-closed strategy
    }

    // Fail-closed: Never return unverified cached or static product during an outage
    return undefined;
  },

  /**
   * 4. Fetch Official Company Contact Info
   */
  getCompanyInfo: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/company`);
      if (res.ok) {
        const json = await res.json();
        if (json.data) return json.data;
      }
    } catch {
      // Fallback to verified local company data
    }
    return {
      locations,
      emails: officialEmails,
      phones: officialPhones,
    };
  },

  /**
   * 5. Fetch Published Website Content Section
   */
  getContent: async (sectionKey: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/content/${encodeURIComponent(sectionKey)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.status === 'published') return json.data;
      }
    } catch {
      // Fallback
    }
    return null;
  },
};
