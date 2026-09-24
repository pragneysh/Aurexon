import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-brand-navy/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="mx-auto my-8 max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-xl font-black tracking-normal text-brand-navy">{product.title}</h2>
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-brand-navy" aria-label="Close product details">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-6 p-5 md:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-3">
            <img src={product.gallery[0]} alt={product.title} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <div className="grid grid-cols-2 gap-3">
              {product.gallery.slice(1).map((item) => (
                <img key={item} src={item} alt={`${product.title} material view`} className="aspect-[4/3] rounded-lg object-cover" loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand-dark-green">Product Overview</p>
            <p className="mt-3 leading-8 text-slate-600">{product.overview}</p>
            <div className="mt-6 grid gap-4">
              {[
                ['Available specifications', 'Contact us for current specifications.'],
                ['Packaging information', 'Shared according to current material lot and dispatch method.'],
                ['Quantity / bulk supply', 'Bulk enquiries are welcome. Availability is confirmed before commitment.'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-bold text-brand-navy">{label}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-6 font-bold text-brand-navy">Application / Use</h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {product.applications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
              className="mt-7 inline-flex rounded-md bg-brand-green px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark-green"
              onClick={onClose}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
