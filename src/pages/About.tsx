import { CheckCircle2, ExternalLink, Layers, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FeatureBand from '../components/FeatureBand';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { locations, metalCategories, values } from '../data/company';
import { images } from '../data/images';

export default function About() {
  return (
    <>
      <SEO
        title="About Aurexon International LLP | Global Metal Scrap Trading & Sourcing"
        description="Learn about Aurexon International LLP, a global metal scrap trading, sourcing, and recycling support business dealing in aluminium, copper, brass, ferrous, and stainless steel materials."
      />

      <PageHeader
        title="About Aurexon"
        description="Professional metal scrap sourcing, trading, and recycling solutions for industrial partners worldwide."
        image={images.about}
      />

      {/* Company Overview */}
      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Your Trusted Partner in Global Metal Scrap Trading"
              description="Aurexon International LLP provides metal scrap sourcing and trading solutions across a diverse range of ferrous and non-ferrous materials, connecting businesses with opportunities for responsible material reuse."
            />
            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Founded on the principles of commercial clarity, reliability, and circular resource management, Aurexon collaborates with manufacturing units, dismantling operations, and industrial recyclers to source and supply quality scrap metals.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              With operational coordination in Ahmedabad, India and Darıca, Turkey, we bridge regional supply corridors with industrial consumers, providing requirement-driven scrap trading without making unsupported operational or volume claims.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-industrial">
            <img
              src={images.warehouse}
              alt="Industrial warehouse and metal scrap storage facility"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-white">
        <SectionHeading
          eyebrow="Core Competencies"
          title="What We Do"
          description="A comprehensive approach to B2B metal scrap trading and sourcing."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Material Sourcing',
              desc: 'Identifying and procuring verified lots of ferrous and non-ferrous scrap directly from industrial manufacturers and secondary processors.',
            },
            {
              title: 'International B2B Trading',
              desc: 'Executing structured scrap metal trade agreements with transparent specifications, pricing terms, and shipping schedules.',
            },
            {
              title: 'Bulk Supply Coordination',
              desc: 'Organizing steady containerized and bulk material movements for foundries, steel mills, and smelters requiring recurring input.',
            },
            {
              title: 'Material Inspection Support',
              desc: 'Providing detailed photo documentation, packaging reports, and XRF alloy verification prior to dispatch commitments.',
            },
            {
              title: 'Circular Recycling Enablement',
              desc: 'Diverting valuable industrial metal byproducts away from landfills and channeling them directly into remelting loops.',
            },
            {
              title: 'Multi-Region Support',
              desc: 'Serving commercial partners with responsive communication across South Asian and Eurasian time zones through our India and Turkey offices.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50/80 p-7">
              <h3 className="text-lg font-black text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Metal Categories Overview */}
      <section className="section">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="The Five Primary Metal Categories"
          description="Explore the materials we trade across ferrous and non-ferrous industry sectors."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {metalCategories.map((category) => {
            const slug = category.replace(' Scrap', '').toLowerCase().replace(/\s+/g, '-');
            return (
              <div
                key={category}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-green hover:shadow-md"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-black text-brand-navy">{category}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    Industrial scrap grades, secondary processing lots, and verified recycling materials.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to={`/products?category=${slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-green hover:underline"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-brand-navy text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-white/12 bg-white/5 p-8">
            <div>
              <p className="eyebrow text-brand-lime">Our Mission</p>
              <h2 className="mt-4 text-2xl font-black leading-snug tracking-normal sm:text-3xl">
                To build reliable, transparent, and responsive metal scrap trading solutions that empower industrial buyers while championing the circular reuse of valuable metal resources.
              </h2>
            </div>
            <p className="mt-6 text-sm text-white/70">
              We strive to earn long-term partnerships through dependability, honesty about material condition, and ethical trade practices.
            </p>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-white/12 bg-white/5 p-8">
            <div>
              <p className="eyebrow text-brand-lime">Our Vision</p>
              <h2 className="mt-4 text-2xl font-black leading-snug tracking-normal sm:text-3xl">
                To be recognized as a premier cross-border trading partner for ferrous and non-ferrous metal scrap, connecting global industrial ecosystems for a more sustainable, resource-efficient future.
              </h2>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Expanding our sourcing capabilities while fostering responsible material recovery across India, Turkey, and international markets.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <FeatureBand
            items={[
              {
                title: 'Responsible Sourcing',
                description: 'Collaborating exclusively with lawful, industrial, and commercial material streams.',
              },
              {
                title: 'Clear Communication',
                description: 'Transparent disclosures regarding material condition, moisture, and specifications.',
              },
              {
                title: 'Circular Commitment',
                description: 'Facilitating secondary metal remelting to reduce primary mineral extraction.',
              },
            ]}
          />
        </div>
      </section>

      {/* Business Values */}
      <section className="section bg-white">
        <SectionHeading
          eyebrow="Our Values"
          title="Principles That Guide Every Transaction"
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-slate-50/70 p-5"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
              <span className="font-bold text-brand-navy">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Locations (India & Turkey) */}
      <section className="section">
        <SectionHeading
          eyebrow="Our Presence"
          title="Locations in India and Turkey"
          description="Aurexon International LLP maintains office locations in India and Turkey to serve regional and international clients."
          align="center"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
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
                  View on Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Approach */}
      <section className="section bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Sustainability"
              title="Championing Secondary Metal Recovery & Resource Efficiency"
              description="Metal recycling represents one of humanity's most effective tools for reducing industrial carbon intensity."
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Recycling aluminium uses up to 95% less energy than producing primary aluminium from bauxite, while copper recycling requires up to 85% less energy. By channeling ferrous and non-ferrous scrap directly back into smelting and casting operations, Aurexon supports industrial buyers in achieving tangible resource savings and lower emissions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-brand-dark-green">
              <span className="rounded-md bg-brand-green/10 px-3 py-1.5">Energy Reduction</span>
              <span className="rounded-md bg-brand-green/10 px-3 py-1.5">Circular Economy</span>
              <span className="rounded-md bg-brand-green/10 px-3 py-1.5">Zero Landfill Goal</span>
              <span className="rounded-md bg-brand-green/10 px-3 py-1.5">Resource Conservation</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-industrial">
            <img
              src={images.sustainability}
              alt="Sustainable metal scrap recycling and material handling"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
