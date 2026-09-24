import { X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { galleryCategories, galleryItems, type GalleryCategory } from '../data/gallery';

type GalleryGridProps = {
  preview?: boolean;
};

export default function GalleryGrid({ preview = false }: GalleryGridProps) {
  const [active, setActive] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = useMemo(() => {
    const items = active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);
    return preview ? items.slice(0, 6) : items;
  }, [active, preview]);

  const current = lightboxIndex === null ? null : filtered[lightboxIndex];

  return (
    <>
      {!preview && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
                active === category
                  ? 'border-brand-green bg-brand-green text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-brand-green hover:text-brand-dark-green'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <button
            type="button"
            key={`${item.title}-${item.image}`}
            onClick={() => setLightboxIndex(index)}
            className="group mb-5 block w-full overflow-hidden rounded-lg bg-white text-left shadow-sm"
          >
            <span className="block overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </span>
            <span className="block border border-t-0 border-slate-200 p-4">
              <span className="eyebrow text-brand-dark-green">{item.category}</span>
              <span className="mt-2 block font-black tracking-normal text-brand-navy">{item.title}</span>
            </span>
          </button>
        ))}
      </div>
      {current && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-brand-navy/88 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-md bg-white/90 text-brand-navy"
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={current.image} alt={current.title} className="max-h-[78vh] w-full object-contain bg-slate-950" />
            <div className="p-4">
              <p className="eyebrow text-brand-dark-green">{current.category}</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-brand-navy">{current.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
