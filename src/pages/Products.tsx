import { useState } from 'react';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { images } from '../data/images';
import { products, type Product } from '../data/products';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <SEO
        title="Aluminium Scrap Products | Aurexon International LLP"
        description="Catalogue of aluminium extrusion scrap, UBC scrap, wheel scrap, sheet scrap, wire scrap, casting scrap and industrial aluminium scrap."
      />
      <PageHeader title="Aluminium Scrap We Deal In" description="A professional catalogue of aluminium scrap materials for B2B sourcing, trading and recycling support." image={images.hero} />
      <section className="section">
        <SectionHeading
          eyebrow="Products / Materials"
          title="Catalogue-style material enquiries"
          description="Each category can be discussed with current specifications, packaging details, quantity requirements and dispatch expectations confirmed before supply."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} onView={setSelectedProduct} />
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
          <p className="eyebrow text-brand-dark-green">Specification Notice</p>
          <h2 className="mt-3 text-2xl font-black tracking-normal text-brand-navy">Contact us for current specifications.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Aurexon does not publish unsupported alloy grades, purity percentages, pricing, minimum quantities or availability. Product details are confirmed directly according to live material streams and buyer requirements.
          </p>
        </div>
      </section>
      <CTASection />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
