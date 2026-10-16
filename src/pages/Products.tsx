import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { images } from '../data/images';
import { products, type Product, type ProductCategory } from '../data/products';

type FilterCategory = 'All' | ProductCategory;

const filterCategories: FilterCategory[] = [
  'All',
  'Aluminium',
  'Brass',
  'Ferrous',
  'Copper',
  'Stainless Steel',
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const handleCategorySelect = (cat: FilterCategory) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      const slug = cat.toLowerCase().replace(/\s+/g, '-');
      setSearchParams({ category: slug }, { replace: true });
    }
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Product counts per category
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: products.length };
    filterCategories.slice(1).forEach((cat) => {
      map[cat] = products.filter((p) => p.category === cat).length;
    });
    return map;
  }, []);

  return (
    <>
      <SEO
        title="Metal Scrap Catalogue & Materials | Aurexon International LLP"
        description="Comprehensive catalogue of aluminium, copper, brass, ferrous, and stainless steel scrap materials for industrial sourcing, trading, and recycling support."
      />

      <PageHeader
        title="Metal Scrap Catalogue"
        description="Explore our primary ferrous and non-ferrous metal scrap categories for industrial sourcing, B2B trading, and recycling support."
        image={images.about}
      />

      <section className="section">
        <SectionHeading
          eyebrow="Materials & Products"
          title="Industrial Scrap Sourcing & Trading Portfolio"
          description="Aurexon sources and trades across five primary ferrous and non-ferrous material categories. Select a category below to explore available material types."
          align="center"
        />

        {/* Category Filter Bar */}
        <div className="mt-10">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 pt-1 no-scrollbar gap-2 sm:gap-3">
            {filterCategories.map((category) => {
              const isActive = activeCategory === category;
              const count = counts[category];
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'border-brand-green bg-brand-green text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-brand-green/60 hover:text-brand-dark-green'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
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

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
            <p>
              Showing <strong className="text-brand-navy">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'} in{' '}
              <strong className="text-brand-navy">{activeCategory === 'All' ? 'All Categories' : `${activeCategory} Scrap`}</strong>
            </p>
            {activeCategory !== 'All' && (
              <button
                type="button"
                onClick={() => handleCategorySelect('All')}
                className="font-bold text-brand-green hover:underline"
              >
                Reset to All
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="my-16 text-center">
            <p className="text-lg font-bold text-brand-navy">No products found in this category.</p>
            <button
              type="button"
              onClick={() => handleCategorySelect('All')}
              className="mt-4 rounded-md bg-brand-green px-4 py-2 text-sm font-bold text-white"
            >
              Show All Products
            </button>
          </div>
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

      {/* Product Detail Modal & Lightbox */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
