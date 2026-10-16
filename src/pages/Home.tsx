import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Leaf,
  MapPin,
  Recycle,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import CTASection from '../components/CTASection';
import IndustryCard from '../components/IndustryCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { company, locations } from '../data/company';
import { images } from '../data/images';
import { products, type Product } from '../data/products';
import { industries, processSteps, services, whyChooseUs } from '../data/services';

const categoryCards = [
  {
    title: 'Aluminium Scrap',
    slug: 'aluminium',
    image: images.categories.aluminium,
    description: 'Extrusions, UBC cans, alloy wheels, wire coils, casting, and sheet scrap for remelting channels.',
    itemsCount: 8,
  },
  {
    title: 'Copper Scrap',
    slug: 'copper',
    image: images.categories.copper,
    description: 'Millberry bare bright wire, heavy berry, Birch/Cliff, cables, tubes, and copper granules.',
    itemsCount: 7,
  },
  {
    title: 'Brass Scrap',
    slug: 'brass',
    image: images.categories.brass,
    description: 'Yellow brass, red brass / gunmetal, honey scrap, turnings, pipes, rods, and plumbing fittings.',
    itemsCount: 7,
  },
  {
    title: 'Ferrous Scrap',
    slug: 'ferrous',
    image: images.categories.ferrous,
    description: 'Heavy Melting Steel (HMS 1, HMS 2, 80:20 blend), shredded steel, cast iron, and turnings.',
    itemsCount: 7,
  },
  {
    title: 'Stainless Steel Scrap',
    slug: 'stainless-steel',
    image: images.categories.stainlessSteel,
    description: 'AISI 304, 316, 430 grades, sheet cuttings, industrial pipe scrap, turnings, and mixed scrap.',
    itemsCount: 7,
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Selected sample products for preview (1 from each category)
  const featuredProducts = products.filter((p) =>
    ['alu-extrusion', 'cu-millberry', 'brass-yellow', 'ferrous-hms1', 'ss-304', 'alu-ubc', 'cu-tube', 'ss-316'].includes(p.id)
  );

  return (
    <>
      <SEO title={company.seo.title} description={company.seo.description} />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-brand-navy text-white">
        <img
          src={images.hero}
          alt="Global metal scrap sourcing and recycling operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/50" />
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-lime/30 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-brand-lime backdrop-blur-sm">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Ferrous & Non-Ferrous Metal Scrap Trading</span>
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-normal sm:text-5xl md:text-6xl lg:text-7xl">
              Global Metal Scrap Solutions. Reliable Business Partnerships.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Explore aluminium, copper, brass, ferrous, and stainless steel scrap sourcing and trading solutions with Aurexon International LLP.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/products">Explore Products</ButtonLink>
              <ButtonLink to="/contact#quote" variant="light">
                Request a Quote
              </ButtonLink>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6 text-xs font-semibold text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-lime" />
                Dual Presence: India & Turkey
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-lime" />
                5 Major Metal Scrap Categories
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-brand-lime" />
                Live Requirement-Led Sourcing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Primary Metal Categories Cards */}
      <section className="section bg-white">
        <SectionHeading
          eyebrow="Primary Categories"
          title="Metal Scrap Materials We Trade & Source"
          description="Explore our primary ferrous and non-ferrous material streams. Click any category to view individual products and specifications."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categoryCards.map((category) => (
            <div
              key={category.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white/90">
                  {category.itemsCount} Products
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-black tracking-normal text-brand-navy group-hover:text-brand-green">
                  {category.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">
                  {category.description}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-slate-50 px-3 py-2 text-xs font-bold text-brand-dark-green transition hover:bg-brand-green hover:text-white"
                  >
                    View Products
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img
              src={images.intro}
              alt="Metal scrap sourcing and industrial trading operations"
              className="aspect-[4/3] rounded-xl object-cover shadow-industrial"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-xl bg-brand-navy p-6 text-white shadow-industrial sm:block">
              <Recycle className="h-8 w-8 text-brand-lime" />
              <p className="mt-3 text-sm font-semibold leading-relaxed">
                Connecting industrial suppliers and consumers with opportunities for responsible material reuse.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title={company.headline}
              description={company.description}
            />
            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Aurexon focuses on practical B2B solutions for metal scrap sourcing, trading, collection, and bulk supply. We operate with high standards of commercial clarity and transparency, verifying actual material lot conditions, packing standards, and shipping requirements before commitments are made.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-200 py-6 text-sm">
              <div>
                <strong className="block text-xl font-black text-brand-navy">5 Categories</strong>
                <span className="text-slate-500">Ferrous & Non-Ferrous Scrap</span>
              </div>
              <div>
                <strong className="block text-xl font-black text-brand-navy">Dual Hubs</strong>
                <span className="text-slate-500">Ahmedabad, India & Darıca, Turkey</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/about">Discover Aurexon</ButtonLink>
              <ButtonLink to="/products" variant="light">
                Browse Full Catalogue
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section bg-white">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Catalogue Highlights"
            title="Featured Scrap Materials"
            description="A cross-section of metal scrap materials commonly sourced and traded by Aurexon."
          />
          <Link
            className="inline-flex items-center gap-2 font-bold text-brand-dark-green hover:text-brand-green"
            to="/products"
          >
            Explore All 36 Materials <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <SectionHeading
          eyebrow="Our Services"
          title="Built for Industrial Metal Scrap Sourcing & Trading"
          description="Tailored B2B services connecting manufacturing units, foundries, and recyclers with reliable scrap supply."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Aurexon */}
      <section className="section bg-brand-navy text-white">
        <div className="industrial-grid absolute inset-0 opacity-15" />
        <div className="relative">
          <SectionHeading
            eyebrow="Why Choose Aurexon"
            title="A Dependable Metal Scrap Partner for B2B Buyers"
            description="Industrial excellence is rooted in clear communication, realistic commitments, and dependable material sourcing."
            light
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-white/12 bg-white/5 p-7 transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-brand-lime">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black tracking-normal text-white">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="section bg-white">
        <SectionHeading
          eyebrow="Our Presence"
          title="Strategic Offices in India & Turkey"
          description="Aurexon International LLP operates out of key industrial hubs to facilitate regional sourcing and international material movements."
          align="center"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                      {loc.country}
                    </span>
                    <h3 className="text-xl font-black text-brand-navy">{loc.displayName}</h3>
                  </div>
                </div>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Address
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {loc.fullAddress}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark-green hover:text-brand-green hover:underline"
                >
                  Open in Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sectors That Rely on Secondary Metal Recovery"
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry} title={industry} />
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Sustainability & Circularity"
              title="Transforming Metal Scrap Into Sustainable Industrial Feed"
              description="Metal recycling conserves energy, cuts virgin mining demands, and powers the circular industrial economy."
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Ferrous and non-ferrous metals can be recycled indefinitely without degradation of their inherent chemical and physical properties. Every ton of scrap metal reused mitigates substantial carbon emissions and landfill volume.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Energy conservation vs. primary extraction',
                'Resource efficiency and waste reduction',
                'Supporting circular supply chain loops',
                'Responsible secondary metal recovery',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <Leaf className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm font-bold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-industrial">
            <img
              src={images.sustainability}
              alt="Responsible metal recycling and circular material management"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <SectionHeading
          eyebrow="How We Work"
          title="A Structured Process From Enquiry to Dispatch"
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-xs font-black text-brand-green">0{index + 1}</span>
              <h3 className="mt-3 font-black text-brand-navy">{step}</h3>
              <CheckCircle2 className="mt-5 h-5 w-5 text-brand-dark-green" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Looking for Metal Scrap Supply?"
        description="Share your requirements for aluminium, copper, brass, ferrous, or stainless steel scrap. Our sourcing team is ready to respond with verified options."
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
