import { useMemo, useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { X, ShieldCheck, RefreshCw, AlertTriangle, MessageSquare, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import ProductListItem from '../components/ProductListItem';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { images } from '../data/images';
import { type Product, type ProductCategory } from '../data/products';
import { publicApi } from '../lib/publicApi';

type FilterCategory = 'All' | ProductCategory;
type CatalogueStatus = 'loading' | 'ready' | 'unavailable';

const filterCategories: FilterCategory[] = [
  'All',
  'Aluminium',
  'Copper',
  'Brass',
  'Ferrous',
  'Stainless Steel',
];

type LightboxData = {
  src: string;
  title: string;
  attribution?: Product['imageAttribution'];
} | null;

export default function Products() {
  const [items, setItems] = useState<Product[]>([]);
  const [catalogueStatus, setCatalogueStatus] = useState<CatalogueStatus>('loading');
  const [searchParams, setSearchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState<LightboxData>(null);
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const loadAuthoritativeCatalogue = useCallback(async () => {
    setCatalogueStatus('loading');
    const data = await publicApi.getProducts();
    if (data !== null) {
      setItems(data);
      setCatalogueStatus('ready');
    } else {
      // Safe fail-closed: Purge items and transition directly to unavailable
      setItems([]);
      setCatalogueStatus('unavailable');
    }
  }, []);

  // Fetch live published products from authoritative backend API
  useEffect(() => {
    let isMounted = true;
    publicApi.getProducts().then((data) => {
      if (!isMounted) return;
      if (data !== null) {
        setItems(data);
        setCatalogueStatus('ready');
      } else {
        // Safe fail-closed: Server is unreachable; purge any stale items to prevent archived leaks
        setItems([]);
        setCatalogueStatus('unavailable');
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Read initial category from query param if valid
  const initialCategory = useMemo<FilterCategory>(() => {
    const param = searchParams.get('category')?.toLowerCase().trim();
    if (!param) return 'All';
    const match = filterCategories.find(
      (c) => c.toLowerCase().replace(/\s+/g, '-') === param || c.toLowerCase() === param
    );
    return match ?? 'All';
  }, [searchParams]);

  const [activeCategory, setActiveCategory] = useState<FilterCategory>(initialCategory);

  // Sync state if URL changes externally
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Handle ESC key for photo lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  // Structured Data (JSON-LD ItemList) strictly including only currently published products
  useEffect(() => {
    // Only inject structured data when catalogue is ready and items are verified published
    if (catalogueStatus !== 'ready' || items.length === 0) {
      const el = document.getElementById('products-jsonld');
      if (el) el.remove();
      return;
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Aurexon International LLP Metal Scrap Catalogue',
      description:
        'Comprehensive B2B metal scrap catalogue detailing aluminium, copper, brass, ferrous, and stainless steel specifications, ISRI codes, and chemical composition.',
      numberOfItems: items.length,
      itemListElement: items.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: p.title,
          description: p.overview || p.description,
          category: `${p.category} Scrap`,
          image: window.location.origin + p.image,
          ...(p.isriCode ? { mpn: p.isriCode } : {}),
          ...(p.materialGrade ? { model: p.materialGrade } : {})
        }
      }))
    };

    let script = document.getElementById('products-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'products-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('products-jsonld');
      if (el) el.remove();
    };
  }, [catalogueStatus, items]);

  const handleCategorySelect = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setExpandedProductId(null);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      const slug = cat.toLowerCase().replace(/\s+/g, '-');
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((p) => p.category === activeCategory);
  }, [activeCategory, items]);

  // Product counts per category
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: items.length };
    filterCategories.slice(1).forEach((cat) => {
      map[cat] = items.filter((p) => p.category === cat).length;
    });
    return map;
  }, [items]);

  return (
    <>
      <SEO
        title="Metal Scrap Catalogue & Specifications | Aurexon International"
        description="Explore our industrial metal scrap catalogue with technical specifications, ISRI codes, and chemical grades across aluminium, copper, brass, and steel."
        canonicalPath="/products"
      />

      <PageHeader
        title="Metal Scrap Catalogue"
        description="Explore our primary ferrous and non-ferrous metal scrap categories with inline material specifications, chemical compositions, and ISRI standards."
        image={images.about}
      />

      <section className="section bg-slate-50/50">
        <SectionHeading
          eyebrow="Materials & Products"
          title="Industrial Scrap Sourcing & Trading Portfolio"
          description="Aurexon sources and trades across five primary ferrous and non-ferrous material categories. All 48 material specifications, ISRI codes, and chemical compositions are detailed directly below."
          align="center"
        />

        {/* Loading State Skeleton */}
        {catalogueStatus === 'loading' && items.length === 0 && (
          <div className="mt-8 sm:mt-10 space-y-4 animate-pulse">
            <div className="h-10 bg-slate-200/80 rounded-full max-w-xl mx-auto" />
            <div className="h-5 bg-slate-200/60 rounded w-48 mx-auto" />
            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-44 sm:h-52 bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm">
                  <div className="flex gap-4">
                    <div className="h-16 w-24 bg-slate-200 rounded-lg shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-5 bg-slate-200 rounded w-1/3" />
                      <div className="h-4 bg-slate-100 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="h-8 bg-slate-100 rounded w-full" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Graceful Unavailable State (Server Outage & Zero Unverified Data Leakage) */}
        {catalogueStatus === 'unavailable' && items.length === 0 && (
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50/60 via-white to-white p-6 sm:p-10 text-center shadow-md">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-inner">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
              Live Sourcing Channel Active
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-black text-brand-navy">
              Catalogue Synchronizing With Production Desks
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Our real-time specification catalogue is temporarily updating. Aurexon's global physical sourcing operations in Ahmedabad (India) and Darıca, Kocaeli (Turkey) remain operational 24/7.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand-dark-green transition"
              >
                <span>Request Direct CIF / FOB Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={loadAuthoritativeCatalogue}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-brand-green hover:text-brand-dark-green transition"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Retry Connection</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">India Headquarters Desk</p>
                <p className="text-sm font-bold text-brand-navy mt-1">Ahmedabad, Gujarat</p>
                <a
                  href="https://wa.me/919909951352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp: +91 990 995 13 52</span>
                </a>
              </div>
              <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Turkey Regional Desk</p>
                <p className="text-sm font-bold text-brand-navy mt-1">Darıca, Kocaeli</p>
                <a
                  href="https://wa.me/905434757477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp: +90 543 475 74 77</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Ready State: Category Filter Bar & Product List */}
        {(catalogueStatus === 'ready' || items.length > 0) && (
          <>
            {/* Category Filter Bar (Horizontally scrollable chips, no wrap) */}
            <div className="mt-8 sm:mt-10">
              <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2.5 pt-1 no-scrollbar gap-2 sm:gap-3 px-1 -mx-1 scroll-smooth">
                {filterCategories.map((category) => {
                  const isActive = activeCategory === category;
                  const count = counts[category] || 0;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategorySelect(category)}
                      className={`group relative flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full border px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'border-brand-green bg-brand-green text-white shadow-md'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-brand-green/60 hover:text-brand-dark-green'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span>{category}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] sm:text-xs transition-colors ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-brand-green/10 group-hover:text-brand-dark-green'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 border-b border-slate-200 pb-3">
                <p>
                  Showing <strong className="text-brand-navy font-bold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'material' : 'materials'} in{' '}
                  <strong className="text-brand-navy font-bold">{activeCategory === 'All' ? `All Categories (${items.length} Materials)` : `${activeCategory} Scrap`}</strong>
                </p>
                {activeCategory !== 'All' && (
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('All')}
                    className="font-bold text-brand-green hover:text-brand-dark-green hover:underline"
                  >
                    Reset to All {items.length} Materials
                  </button>
                )}
              </div>
            </div>

            {/* Detailed Product List: Desktop preserves full 38/62 split, Mobile uses compact cards with accordion */}
            <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-6 lg:space-y-8">
              {filteredProducts.map((product, index) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  index={index}
                  isExpanded={expandedProductId === product.id}
                  onToggleExpand={() =>
                    setExpandedProductId((prev) => (prev === product.id ? null : product.id))
                  }
                  onImageClick={(src, title) =>
                    setLightbox({ src, title, attribution: product.imageAttribution })
                  }
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="my-16 rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                <p className="text-lg font-bold text-brand-navy">No products found in this category.</p>
                <button
                  type="button"
                  onClick={() => handleCategorySelect('All')}
                  className="mt-4 rounded-md bg-brand-green px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark-green"
                >
                  Show All {items.length} Materials
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Material Availability & Specification Notice */}
      <section className="section bg-white">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-dark-green">Sourcing & Specification Notice</span>
            <h2 className="mt-3 text-2xl font-black tracking-normal text-brand-navy sm:text-3xl">
              Subject to Channel Availability & Confirmed Specifications
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The products listed in our catalogue represent materials commonly traded and sourced by Aurexon International LLP across aluminium, copper, brass, ferrous, and stainless steel scrap streams. We do not make unsupported claims regarding fixed inventory or guaranteed constant supply without confirmation.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Exact specifications, chemical compositions, alloy grading (XRF analysis), packing methods (baled, loose, briquetted, containerized), and dispatch logistics are verified transparently upon receiving your specific enquiry.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Full-Photo Lightbox (Image Accessibility Feature) */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-navy/90 p-4 backdrop-blur-md transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo preview of ${lightbox.title}`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-5 py-3.5 text-white">
              <div className="min-w-0 pr-4">
                <h3 className="truncate text-base font-bold text-white">{lightbox.title}</h3>
                {lightbox.attribution?.physicalMatch && (
                  <p className="truncate text-xs text-slate-400">
                    Physical form: {lightbox.attribution.physicalMatch}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close photo preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Photo */}
            <div className="flex max-h-[70vh] items-center justify-center bg-black/60 p-2 sm:p-4">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[66vh] max-w-full rounded-lg object-contain shadow-lg"
              />
            </div>

            {/* Bottom Attribution */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-slate-900/95 px-5 py-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
                <span>
                  {lightbox.attribution
                    ? `Verified Image (${lightbox.attribution.license}) • Credit: ${lightbox.attribution.author}`
                    : 'Aurexon Industrial Sourcing Catalogue'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
