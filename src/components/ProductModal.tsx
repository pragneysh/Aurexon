import { ArrowUpRight, CheckCircle2, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsFullScreen(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullScreen) setIsFullScreen(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen, onClose]);

  if (!product) return null;

  const allImages = [product.image, ...(product.gallery || [])].filter(
    (img, index, self) => self.indexOf(img) === index
  );
  const activeImage = allImages[activeImageIndex] || product.image;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto modal-backdrop p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {product.category} Scrap
            </span>
            <h2 className="text-xl font-black tracking-normal text-brand-navy sm:text-2xl">
              {product.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 hover:text-brand-navy"
            aria-label="Close product details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* Gallery View */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-950">
              <img
                src={activeImage}
                alt={product.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setIsFullScreen(true)}
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                title="View full resolution"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            {/* Thumbnail selector */}
            {allImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={`${img}-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-md border-2 transition ${
                      activeImageIndex === idx
                        ? 'border-brand-green ring-2 ring-brand-green/30'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Visual Material & License Verification */}
            {product.imageAttribution && (
              <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-brand-green shrink-0" />
                  <span>Verified Form: {product.imageAttribution.physicalMatch}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[10px] text-slate-500">
                  <span>Photo Credit: {product.imageAttribution.author}</span>
                  <span>•</span>
                  <span>License: {product.imageAttribution.license}</span>
                  <span>•</span>
                  <span>Source: {product.imageAttribution.source}</span>
                </div>
              </div>
            )}

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600">
              <strong className="text-brand-navy">Availability Notice:</strong> Sourced through live industrial channels. Material lots are subject to prior sale and live stock confirmation.
            </div>
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Product Description
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {product.overview || product.description}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50/70 p-3 text-xs">
              {product.materialGrade && (
                <div>
                  <span className="font-semibold text-slate-400 block text-[10px] uppercase">Grade</span>
                  <span className="font-bold text-brand-navy">{product.materialGrade}</span>
                </div>
              )}
              {product.isriCode && (
                <div>
                  <span className="font-semibold text-slate-400 block text-[10px] uppercase">ISRI Code</span>
                  <span className="font-bold text-brand-green">{product.isriCode}</span>
                </div>
              )}
              {product.hsCode && (
                <div>
                  <span className="font-semibold text-slate-400 block text-[10px] uppercase">HS Code</span>
                  <span className="font-mono font-medium text-slate-700">{product.hsCode}</span>
                </div>
              )}
              {product.composition && (
                <div className="col-span-2">
                  <span className="font-semibold text-slate-400 block text-[10px] uppercase">Assayed Composition / Purity</span>
                  <span className="font-medium text-slate-800">{product.composition}</span>
                </div>
              )}
            </div>

            {product.standardNames && product.standardNames.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Standard Industry Names
                </h3>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {product.standardNames.map((alias) => (
                    <span
                      key={alias}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-200"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.packaging && product.packaging.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Typical Packaging & Delivery
                </h3>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {product.packaging.map((pkg) => (
                    <span
                      key={pkg}
                      className="rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800 border border-emerald-200"
                    >
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Material Details & Specifications
                </h3>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                  {product.specifications.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Common Industrial Applications
                </h3>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green px-5 py-3 text-sm font-bold text-white shadow transition hover:bg-brand-dark-green"
              >
                Enquire for {product.title}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsFullScreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullScreen(false)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40"
            aria-label="Exit fullscreen"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={activeImage}
            alt={product.title}
            className="max-h-[92vh] max-w-[92vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
