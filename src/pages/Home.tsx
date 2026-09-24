import { ArrowRight, CheckCircle2, Leaf, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import IndustryCard from '../components/IndustryCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { company } from '../data/company';
import { images } from '../data/images';
import { products, type Product } from '../data/products';
import { industries, processSteps, services, whyChooseUs } from '../data/services';
import { useState } from 'react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <SEO title={company.seo.title} description={company.seo.description} />
      <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-brand-navy text-white">
        <img src={images.hero} alt="Industrial aluminium processing and recyclable metal materials" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/82 to-brand-navy/44" />
        <div className="absolute inset-0 industrial-grid opacity-25" />
        <div className="relative mx-auto flex min-h-[calc(100vh-74px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-lime">Aluminium Scrap Trading & Recycling Support</p>
            <h1 className="mt-5 text-5xl font-black tracking-normal sm:text-6xl lg:text-7xl">Giving Aluminium a New Life.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Reliable aluminium scrap sourcing, trading and recycling solutions built for a more sustainable future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/products">Explore Our Products</ButtonLink>
              <ButtonLink to="/contact#quote" variant="light">
                Request a Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img src={images.intro} alt="Aluminium material handling for recycling" className="aspect-[4/3] rounded-lg object-cover shadow-industrial" loading="lazy" />
            <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-lg bg-brand-navy p-6 text-white shadow-industrial sm:block">
              <Recycle className="h-8 w-8 text-brand-lime" />
              <p className="mt-3 text-sm font-semibold leading-6">Circular aluminium use, responsible material management and dependable B2B support.</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="Your Trusted Partner in Aluminium Scrap"
              description="Aurexon International LLP provides reliable aluminium scrap sourcing, trading and recycling support for businesses that need dependable recyclable aluminium material streams."
            />
            <p className="mt-6 leading-8 text-slate-600">
              The company focuses on practical B2B solutions for aluminium scrap sourcing, collection, bulk supply and material trading, supporting industrial buyers while encouraging the efficient reuse of valuable metal resources.
            </p>
            <ButtonLink to="/about" className="mt-8">
              Discover Aurexon
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <SectionHeading
          eyebrow="Product Categories"
          title="Aluminium Scrap Materials"
          description="Explore the key aluminium scrap categories Aurexon can support. Current specifications and availability are confirmed on enquiry."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.slug} product={product} onView={setSelectedProduct} compact />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Services" title="Built for Industrial Material Requirements" align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section bg-brand-navy text-white">
        <div className="industrial-grid absolute inset-0 opacity-15" />
        <div className="relative">
          <SectionHeading
            eyebrow="Why Choose Aurexon"
            title="A dependable scrap partner for B2B buyers."
            description="Premium service is not about loud claims. It is about responsive communication, responsible handling and clarity at every step."
            light
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-white/12 bg-white/6 p-6">
                <Icon className="h-7 w-7 text-brand-lime" aria-hidden="true" />
                <h3 className="mt-4 font-black tracking-normal text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <SectionHeading eyebrow="Industries We Serve" title="Industrial sectors that rely on aluminium recovery" align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry} title={industry} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Sustainability"
              title="Turning Scrap Into Opportunity"
              description="Aluminium recycling helps reduce material waste, recover valuable metal resources and support circular use across industrial supply chains."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Reducing material waste', 'Supporting circular use of metals', 'Recovering valuable aluminium', 'Encouraging responsible material management'].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Leaf className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="font-semibold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={images.sustainability} alt="Responsible recycling operations and recovered materials" className="aspect-[4/3] rounded-lg object-cover shadow-industrial" loading="lazy" />
        </div>
      </section>

      <section className="section bg-white">
        <SectionHeading eyebrow="Process" title="A clear path from enquiry to dispatch" align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="relative rounded-lg border border-slate-200 bg-slate-50 p-5">
              <span className="text-sm font-black text-brand-green">0{index + 1}</span>
              <h3 className="mt-3 font-black tracking-normal text-brand-navy">{step}</h3>
              <CheckCircle2 className="mt-5 h-6 w-6 text-brand-dark-green" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="Gallery Preview" title="Industrial materials, handling and dispatch" />
          <Link className="inline-flex items-center gap-2 font-bold text-brand-dark-green hover:text-brand-green" to="/gallery">
            View Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <GalleryGrid preview />
      </section>

      <CTASection />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
