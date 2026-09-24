import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { company } from '../data/company';
import { images } from '../data/images';

const contactItems = [
  { label: 'Company', value: company.name, icon: MapPin },
  { label: 'Address', value: company.address, icon: MapPin },
  { label: 'Phone', value: company.phone, icon: Phone },
  { label: 'Email', value: company.email, icon: Mail },
  { label: 'WhatsApp', value: company.whatsapp, icon: MessageCircle },
  { label: 'Business Hours', value: company.businessHours, icon: Clock },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Aurexon International LLP | Aluminium Scrap Enquiry"
        description="Contact Aurexon International LLP for aluminium scrap sourcing, trading, bulk supply and recycling support enquiries."
      />
      <PageHeader
        title="Let's Talk Aluminium"
        description="Have a requirement or business enquiry? Connect with Aurexon International LLP."
        image={images.about}
      />
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Contact Us" title="Business enquiry details" />
            <div className="mt-8 grid gap-4">
              {contactItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-green/10 text-brand-dark-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    <p className="mt-1 font-bold text-brand-navy">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Quote"
              title="Request a Quote"
              description="Share your material requirement, approximate quantity and delivery location so the team can respond with relevant next steps."
            />
            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-black tracking-normal text-brand-navy">Map Placeholder</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Google Maps can be added when a real company address or map URL is supplied.</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
