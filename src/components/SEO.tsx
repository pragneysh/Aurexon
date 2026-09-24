import { useEffect } from 'react';
import { company } from '../data/company';

type SEOProps = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, [description, title]);

  useEffect(() => {
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', company.logo);
  }, []);

  return null;
}
