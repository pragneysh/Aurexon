import { Search } from 'lucide-react';
import type { Product } from '../data/products';
import Card from './Card';

type ProductCardProps = {
  product: Product;
  onView?: (product: Product) => void;
  compact?: boolean;
};

export default function ProductCard({ product, onView, compact = false }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black tracking-normal text-brand-navy">{product.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <button
          type="button"
          onClick={() => onView?.(product)}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-brand-green/30 px-4 py-2 text-sm font-bold text-brand-dark-green transition hover:bg-brand-green hover:text-white"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          {compact ? 'View Details' : 'Enquire Now'}
        </button>
      </div>
    </Card>
  );
}
