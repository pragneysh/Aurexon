import { CheckCircle2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import FeatureBand from '../components/FeatureBand';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { values } from '../data/company';
import { images } from '../data/images';

export default function About() {
  return (
    <>
      <SEO
        title="About Aurexon International LLP | Aluminium Scrap Company"
        description="Learn about Aurexon International LLP, an aluminium scrap sourcing, trading and recycling support company."
      />
      <PageHeader title="About Aurexon" description="Professional aluminium scrap sourcing, trading and recycling support for industrial material partners." image={images.about} />
      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Responsible aluminium scrap solutions with a premium industrial approach."
              description="Aurexon International LLP works with aluminium scrap and recyclable metal material requirements across sourcing, collection, trading, recycling support and bulk supply."
            />
            <p className="mt-6 leading-8 text-slate-600">
              The company is built around reliability, clarity and responsible material management. Aurexon supports buyers and material partners with practical communication and requirement-led solutions without making unsupported claims about certifications, capacity or geographic reach.
            </p>
          </div>
          <img src={images.warehouse} alt="Industrial warehouse for recyclable material handling" className="aspect-[4/3] rounded-lg object-cover shadow-industrial" loading="lazy" />
        </div>
      </section>
      <section className="section bg-white">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ['Who We Are', 'Aurexon International LLP is a B2B aluminium scrap and metal scrap trading company focused on reliable sourcing and material supply support.'],
            ['What We Do', 'The company deals in aluminium scrap sourcing, collection, trading, bulk material supply and recycling support.'],
            ['Our Approach', 'Aurexon keeps communication clear, avoids unsupported claims and confirms current material details before business commitments.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-xl font-black tracking-normal text-brand-navy">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-brand-navy text-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mission"
              title="To build reliable and responsible aluminium scrap supply solutions while supporting the efficient reuse of valuable metal resources."
              light
            />
          </div>
          <div className="rounded-lg border border-white/12 bg-white/6 p-7">
            <p className="eyebrow text-brand-lime">Vision</p>
            <p className="mt-4 text-2xl font-black leading-tight tracking-normal">
              To be a trusted industrial partner for aluminium scrap trading and recycling support, helping useful metal return to productive supply chains.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <FeatureBand
            items={[
              { title: 'Reliable Supply', description: 'Requirement-led sourcing and supply support for aluminium scrap buyers.' },
              { title: 'Responsible Handling', description: 'A focus on circular use, waste reduction and practical recovery of aluminium resources.' },
              { title: 'Clear Communication', description: 'Transparent discussions around material type, availability and current specifications.' },
            ]}
          />
        </div>
      </section>
      <section className="section bg-white">
        <SectionHeading eyebrow="Our Values" title="The principles behind every enquiry" align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value} className="flex items-center gap-3 rounded-lg border border-slate-200 p-5">
              <CheckCircle2 className="h-5 w-5 text-brand-green" />
              <span className="font-black tracking-normal text-brand-navy">{value}</span>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
