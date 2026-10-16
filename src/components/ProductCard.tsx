import { ArrowUpRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import Card from './Card';

type ProductCardProps = {
  product: Product;
  onView?: (product: Product) => void;
};

const categoryBadgeColors: Record<Product['category'], string> = {
  Aluminium: 'bg-sky-50 text-sky-800 border-sky-200',
  Brass: 'bg-amber-50 text-amber-900 border-amber-200',
  Ferrous: 'bg-slate-100 text-slate-800 border-slate-300',
  Copper: 'bg-orange-50 text-orange-800 border-orange-200',
  'Stainless Steel': 'bg-emerald-50 text-emerald-800 border-emerald-200',
};

export default function ProductCard({ product, onView }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-slate-100"
        onClick={() => onView?.(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={`absolute left-3.5 top-3.5 rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
            categoryBadgeColors[product.category]
          }`}
        >
          {product.category}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onView?.(product);
          }}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-brand-lime"
          aria-label={`View details of ${product.title}`}
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3
          className="cursor-pointer text-lg font-black tracking-normal text-brand-navy hover:text-brand-green"
          onClick={() => onView?.(product)}
        >
          {product.title}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        <div className="mt-auto pt-5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onView?.(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-green hover:bg-slate-50 hover:text-brand-dark-green"
          >
            <Eye className="h-3.5 w-3.5" />
            View Details
          </button>
          <Link
            to={`/contact?material=${encodeURIComponent(product.title)}#quote`}
            className="flex-1 inline-flex items-center justify-center gap-1 rounded-md bg-brand-green px-3 py-2 text-xs font-bold text-white transition hover:bg-brand-dark-green shadow-sm"
          >
            Enquire Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
