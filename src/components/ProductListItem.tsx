import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Box,
  Tag,
  Layers,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

type ProductListItemProps = {
  product: Product;
  index: number;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onImageClick?: (image: string, title: string) => void;
};

const categoryBadgeStyles: Record<Product['category'], { badge: string; accent: string }> = {
  Aluminium: {
    badge: 'bg-sky-50 text-sky-800 border-sky-200',
    accent: 'text-sky-700'
  },
  Copper: {
    badge: 'bg-orange-50 text-orange-800 border-orange-200',
    accent: 'text-orange-700'
  },
  Brass: {
    badge: 'bg-amber-50 text-amber-900 border-amber-200',
    accent: 'text-amber-800'
  },
  Ferrous: {
    badge: 'bg-slate-100 text-slate-800 border-slate-300',
    accent: 'text-slate-700'
  },
  'Stainless Steel': {
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accent: 'text-emerald-700'
  }
};

export default function ProductListItem({
  product,
  isExpanded = false,
  onToggleExpand,
  onImageClick
}: ProductListItemProps) {
  const theme = categoryBadgeStyles[product.category] || categoryBadgeStyles.Aluminium;

  // Single primary spec snippet for collapsed mobile card
  const primarySpec = product.composition
    ? product.composition.split(',')[0]
    : product.specifications?.[0] || product.imageAttribution?.physicalMatch || 'Verified Material';

  return (
    <article
      id={product.slug}
      className={`group rounded-2xl border bg-white shadow-xs transition-all duration-200 hover:border-brand-green/40 hover:shadow-md ${
        isExpanded ? 'border-brand-green/50 ring-1 ring-brand-green/20' : 'border-slate-200/90'
      } p-3 sm:p-5 lg:p-7`}
    >
      {/* ======================================================== */}
      {/* 1. DESKTOP & TABLET VIEW (md: and above, 768px+)         */}
      {/* 100% PRESERVED EXISTING 38/62 LAYOUT WITH ALL SPECS      */}
      {/* ======================================================== */}
      <div className="hidden md:block">
        {/* Desktop Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4 sm:pb-5">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${theme.badge}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {product.category} Scrap
              </span>
              {product.materialGrade && (
                <span className="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 border border-slate-200">
                  Grade: {product.materialGrade}
                </span>
              )}
              {product.isriCode && (
                <span className="rounded bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
                  ISRI: {product.isriCode}
                </span>
              )}
              {product.hsCode && (
                <span className="rounded bg-slate-50 px-2 py-0.5 font-mono text-xs font-medium text-slate-600 border border-slate-200">
                  HS: {product.hsCode}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-brand-navy">
              {product.title}
            </h2>
          </div>

          {/* Primary Quote CTA Button (Desktop Header) */}
          <div className="shrink-0">
            <Link
              to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-green px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-dark-green hover:shadow-md"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        {/* Desktop Main Content (38% Image / 62% Information) */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-5 lg:gap-7 items-start">
          {/* Left Column: Image & Provenance (~38%) */}
          <div className="flex flex-col gap-2.5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80 shadow-sm">
              <img
                src={product.image}
                alt={`${product.title} - ${product.imageAttribution?.physicalMatch || product.title}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102 cursor-pointer"
                loading="lazy"
                onClick={() => onImageClick?.(product.image, product.title)}
              />
              <button
                type="button"
                onClick={() => onImageClick?.(product.image, product.title)}
                className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-md bg-black/65 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm transition hover:bg-black/85"
                title="Click to view full-resolution photo"
              >
                <FileText className="h-3 w-3" />
                <span>Full Photo</span>
              </button>
            </div>

            {/* Physical Form & Photo License Provenance */}
            <div className="rounded-lg border border-slate-200/80 bg-slate-50/80 p-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-1.5">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                <p className="font-medium text-slate-800 leading-snug">
                  <span className="text-slate-500 font-normal">Physical Form: </span>
                  {product.imageAttribution?.physicalMatch || 'Verified industrial scrap material'}
                </p>
              </div>
              {product.imageAttribution && (
                <p className="mt-1 text-[11px] text-slate-500 pl-5">
                  License: {product.imageAttribution.license} • Credit: {product.imageAttribution.author}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Overview & Key Specifications (~62%) */}
          <div className="flex flex-col justify-start">
            <div>
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
                {product.overview || product.description}
              </p>
              {product.description && product.overview && product.description !== product.overview && (
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500">
                  {product.description}
                </p>
              )}
            </div>

            {/* Key Specifications Grid */}
            <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5">
              <div className="grid grid-cols-2 gap-3 text-xs">
                {product.composition && (
                  <div className="col-span-2 pb-2 border-b border-slate-200/60">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Assayed Composition / Purity
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm font-semibold text-slate-900">
                      {product.composition}
                    </span>
                  </div>
                )}

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Material Grade
                  </span>
                  <span className="mt-0.5 block font-semibold text-brand-navy">
                    {product.materialGrade || `${product.category} Scrap`}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Physical Form
                  </span>
                  <span
                    className="mt-0.5 block font-medium text-slate-800 truncate"
                    title={product.imageAttribution?.physicalMatch}
                  >
                    {product.imageAttribution?.physicalMatch || 'Industrial Scrap Material'}
                  </span>
                </div>

                {product.isriCode && (
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      ISRI Standard
                    </span>
                    <span className="mt-0.5 block font-bold text-brand-green">
                      {product.isriCode}
                    </span>
                  </div>
                )}

                {product.hsCode && (
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      HS Tariff Code
                    </span>
                    <span className="mt-0.5 block font-mono font-medium text-slate-800">
                      {product.hsCode}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Standard Industry Names / Aliases */}
            {product.standardNames && product.standardNames.length > 0 && (
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1 mr-1">
                  <Tag className="h-3 w-3 text-slate-400" />
                  <span>Aliases:</span>
                </span>
                {product.standardNames.map((alias) => (
                  <span
                    key={alias}
                    className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200/80"
                  >
                    {alias}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Additional Details (Flowing Naturally Across Full Width Below) */}
        {((product.specifications && product.specifications.length > 0) ||
          (product.applications && product.applications.length > 0) ||
          (product.packaging && product.packaging.length > 0)) && (
          <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-5 text-xs">
            {product.specifications && product.specifications.length > 0 && (
              <div className="lg:col-span-6">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  <Layers className="h-3.5 w-3.5 text-slate-400" />
                  <span>Material Characteristics & Specifications</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-slate-700">
                  {product.specifications.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="lg:col-span-6 flex flex-col gap-3.5 justify-start">
              {product.applications && product.applications.length > 0 && (
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Common Industrial Applications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
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

              {product.packaging && product.packaging.length > 0 && (
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                    <Box className="h-3 w-3 text-emerald-600" />
                    <span>Packaging & Delivery Options</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.packaging.map((pkg) => (
                      <span
                        key={pkg}
                        className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 border border-emerald-200"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop Footer */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-500">
          <p className="italic text-[11px] text-slate-500">
            * Subject to live channel availability, minimum container order quantities, and independent assay verification.
          </p>
          <Link
            to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
            className="font-semibold text-brand-green hover:text-brand-dark-green inline-flex items-center gap-1"
          >
            <span>Enquire about {product.title}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE COMPACT VIEW (below 768px / block md:hidden)   */}
      {/* COMPACT CARD (130-160px) WITH INLINE ACCORDION EXPANSION */}
      {/* ======================================================== */}
      <div className="block md:hidden">
        {/* Collapsed Top Summary Row (88px square image + primary info) */}
        <div className="flex gap-2.5 items-start">
          {/* Product Image: 88px square, object-cover, lazy-loaded */}
          <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
            <img
              src={product.image}
              alt={`${product.title} - ${product.imageAttribution?.physicalMatch || product.title}`}
              className="h-full w-full object-cover cursor-pointer"
              loading="lazy"
              width="88"
              height="88"
              onClick={() => onImageClick?.(product.image, product.title)}
            />
          </div>

          {/* Primary Information: Badges, Title, Key Spec */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${theme.badge}`}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                {product.category}
              </span>
              {product.isriCode ? (
                <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                  ISRI: {product.isriCode}
                </span>
              ) : product.materialGrade ? (
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 border border-slate-200 truncate max-w-[130px]">
                  {product.materialGrade}
                </span>
              ) : null}
            </div>

            <h3 className="text-sm font-bold text-brand-navy leading-snug line-clamp-2">
              {product.title}
            </h3>

            {/* One key specification snippet */}
            <p className="mt-1 text-xs text-slate-600 line-clamp-1">
              <span className="font-semibold text-slate-500">Spec: </span>
              {primarySpec}
            </p>
          </div>
        </div>

        {/* Mobile Action Controls: View Details toggle & Request Quote button */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            aria-controls={`mobile-details-${product.id}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                isExpanded ? 'rotate-180 text-brand-green' : 'text-slate-400'
              }`}
            />
          </button>

          <Link
            to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-green px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-brand-dark-green active:bg-brand-dark-green transition"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Expanded Details Section (Accessible Inline Accordion) */}
        {isExpanded && (
          <div
            id={`mobile-details-${product.id}`}
            className="mt-4 pt-3.5 border-t border-slate-200 space-y-3.5 text-xs animate-in fade-in duration-200"
          >
            {/* Full photo button & Physical Form */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-1.5 text-slate-800 font-medium">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                  <span>
                    <strong className="text-slate-500 font-normal">Physical Form: </strong>
                    {product.imageAttribution?.physicalMatch || 'Verified industrial scrap material'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onImageClick?.(product.image, product.title)}
                  className="shrink-0 rounded bg-slate-200/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 hover:bg-slate-300"
                >
                  Full Photo
                </button>
              </div>
              {product.imageAttribution && (
                <p className="text-[10px] text-slate-500 pl-5">
                  License: {product.imageAttribution.license} • Credit: {product.imageAttribution.author}
                </p>
              )}
            </div>

            {/* Complete Description */}
            <div>
              <p className="text-xs leading-relaxed text-slate-700">
                {product.overview || product.description}
              </p>
              {product.description && product.overview && product.description !== product.overview && (
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {product.description}
                </p>
              )}
            </div>

            {/* Complete Key Specifications Grid */}
            <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-3 space-y-2">
              {product.composition && (
                <div className="pb-2 border-b border-slate-200/60">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Assayed Composition / Purity
                  </span>
                  <span className="font-semibold text-slate-900 text-xs">
                    {product.composition}
                  </span>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="block font-bold text-slate-400 uppercase">Material Grade</span>
                  <span className="font-semibold text-brand-navy">
                    {product.materialGrade || `${product.category} Scrap`}
                  </span>
                </div>
                {product.isriCode && (
                  <div>
                    <span className="block font-bold text-slate-400 uppercase">ISRI Standard</span>
                    <span className="font-bold text-brand-green">{product.isriCode}</span>
                  </div>
                )}
                {product.hsCode && (
                  <div>
                    <span className="block font-bold text-slate-400 uppercase">HS Tariff Code</span>
                    <span className="font-mono text-slate-800">{product.hsCode}</span>
                  </div>
                )}
                <div>
                  <span className="block font-bold text-slate-400 uppercase">Physical Form</span>
                  <span className="font-medium text-slate-700 truncate block" title={product.imageAttribution?.physicalMatch}>
                    {product.imageAttribution?.physicalMatch || 'Scrap Material'}
                  </span>
                </div>
              </div>
            </div>

            {/* Aliases */}
            {product.standardNames && product.standardNames.length > 0 && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1">
                  <Tag className="h-3 w-3 text-slate-400" />
                  <span>Aliases:</span>
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.standardNames.map((alias) => (
                    <span
                      key={alias}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sourcing Specifications Checklist */}
            {product.specifications && product.specifications.length > 0 && (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                  <Layers className="h-3 w-3 text-slate-400" />
                  <span>Sourcing Specifications:</span>
                </span>
                <ul className="space-y-1 text-slate-700 text-xs">
                  {product.specifications.map((spec) => (
                    <li key={spec} className="flex items-start gap-1.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications & Packaging */}
            {product.applications && product.applications.length > 0 && (
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Common Applications:
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.packaging && product.packaging.length > 0 && (
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Box className="h-3 w-3 text-emerald-600" />
                  <span>Packaging & Delivery:</span>
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.packaging.map((pkg) => (
                    <span
                      key={pkg}
                      className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-800 border border-emerald-200"
                    >
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Accordion Action Bar */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={onToggleExpand}
                className="text-xs font-semibold text-slate-600 hover:text-brand-navy flex items-center gap-1 py-1"
              >
                <ChevronUp className="h-3.5 w-3.5" />
                <span>Hide Details</span>
              </button>

              <Link
                to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-green px-3.5 py-1.5 text-xs font-bold text-white hover:bg-brand-dark-green"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
