import { useEffect } from 'react';

const PRODUCTION_ORIGIN = 'https://aurexoninternational.com';

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
};

export default function SEO({
  title,
  description,
  canonicalPath,
  image = `${PRODUCTION_ORIGIN}/logo/aurexon-logo.png`,
  type = 'website',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to safely set or create meta elements
    const setMeta = (attr: string, key: string, content: string | null) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (content === null) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to safely set or create link elements
    const setLink = (rel: string, href: string | null) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!href) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);

    // 3. Robots / Indexing Directives
    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // 4. Canonical URL
    const rawPath = canonicalPath !== undefined ? canonicalPath : (typeof window !== 'undefined' ? window.location.pathname : '/');
    const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
    const canonicalUrl = `${PRODUCTION_ORIGIN}${cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '')}`;
    setLink('canonical', canonicalUrl);

    // Ensure absolute image URL
    const absoluteImage = image.startsWith('http') ? image : `${PRODUCTION_ORIGIN}${image.startsWith('/') ? image : `/${image}`}`;

    // 5. Open Graph
    setMeta('property', 'og:site_name', 'Aurexon International LLP');
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', absoluteImage);
    setMeta('property', 'og:image:alt', title);

    // 6. Twitter / X Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', canonicalUrl);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteImage);
    setMeta('name', 'twitter:image:alt', title);
  }, [title, description, canonicalPath, image, type, noindex]);

  return null;
}
