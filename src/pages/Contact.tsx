import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { company, locations } from '../data/company';
import { images } from '../data/images';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Aurexon International LLP | Metal Scrap Trading & Sourcing"
        description="Contact Aurexon International LLP for aluminium, copper, brass, ferrous, and stainless steel scrap sourcing, trading, and recycling support. Offices in Ahmedabad, India and Darıca, Turkey."
      />

      <PageHeader
        title="Contact Aurexon"
        description="Connect with our sourcing and trading teams in India and Turkey for material requirements, offers, or partnership enquiries."
        image={images.about}
      />

      {/* Office Locations Cards */}
      <section className="section bg-white">
        <SectionHeading
          eyebrow="Our Offices"
          title="Global Presence in India & Turkey"
          description="Aurexon International LLP operates coordinated office locations to support domestic and cross-border metal scrap trading."
          align="center"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                        {loc.country} • {loc.officeType}
                      </span>
                      <h3 className="text-xl font-black text-brand-navy">{loc.displayName}</h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Registered Address
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 font-medium">
                    {loc.fullAddress}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2.5 text-xs font-bold text-brand-dark-green shadow-sm transition hover:bg-brand-green hover:text-white"
                >
                  <MapPin className="h-4 w-4" />
                  Get Map Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Enquiries & Contact Form */}
      <section className="section">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Business Enquiry & Communications"
              description="Reach out directly for general business enquiries, material requirements, or supplier onboarding."
            />

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                  <p className="mt-1 font-bold text-brand-navy">{company.email}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="mt-1 font-bold text-brand-navy">{company.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</p>
                  <p className="mt-1 font-bold text-brand-navy">{company.whatsapp}</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
                  <p className="mt-1 font-bold text-brand-navy">{company.businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Quotation Request Section */}
      <section className="section bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Live Sourcing"
              title="Request a Quotation"
              description="Provide your target metal scrap category, required metric tonnage, target delivery port or plant location, and packing preferences."
            />

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="font-bold text-brand-navy">What happens next?</h4>
                <ol className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-600 list-decimal list-inside">
                  <li>Our sourcing team checks live channel availability.</li>
                  <li>Material specifications, photographs, and lot details are reviewed.</li>
                  <li>A transparent commercial offer with delivery terms is shared.</li>
                </ol>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="font-bold text-brand-navy">Primary Trading Categories:</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aluminium Scrap • Copper Scrap • Brass Scrap • Ferrous (HMS 1 & 2 / Shredded) • Stainless Steel (304 / 316 / 430)
                </p>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
