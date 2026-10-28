import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { company, locations, officialEmails, officialPhones } from '../data/company';
import { images } from '../data/images';

export default function Contact() {
  // Inject structured data for ContactPage and Organization contact points
  useEffect(() => {
    const contactSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Aurexon International LLP',
      url: window.location.href,
      description:
        'Official business contact details for Aurexon International LLP. Sourcing and trading offices in Ahmedabad, India and Darıca, Turkey.',
      mainEntity: {
        '@type': 'Organization',
        name: company.name,
        alternateName: company.shortName,
        url: window.location.origin,
        logo: window.location.origin + company.logo,
        email: [officialEmails[0].address, officialEmails[1].address],
        telephone: [officialPhones[0].number, officialPhones[1].number],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: officialPhones[0].number,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Gujarati'],
          },
          {
            '@type': 'ContactPoint',
            telephone: officialPhones[1].number,
            contactType: 'international trading',
            areaServed: 'TR',
            availableLanguage: ['English', 'Turkish'],
          },
        ],
        address: locations.map((loc) => ({
          '@type': 'PostalAddress',
          streetAddress: loc.fullAddress,
          addressCountry: loc.country === 'India' ? 'IN' : 'TR',
          addressLocality: loc.city,
          ...(loc.postalCode ? { postalCode: loc.postalCode } : {}),
        })),
      },
    };

    let script = document.getElementById('contact-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'contact-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(contactSchema);

    return () => {
      const el = document.getElementById('contact-jsonld');
      if (el) {
        el.remove();
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Contact Us | Aurexon International LLP - India & Turkey Offices"
        description="Get in touch with Aurexon International LLP for metal scrap sourcing, trading quotes, and partnership inquiries. Offices in Ahmedabad, India and Darıca, Turkey."
        canonicalPath="/contact"
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
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-7 sm:p-8 shadow-sm transition hover:shadow-md"
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

                {/* Registered Address */}
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Full Registered Address
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 font-medium">
                    {loc.fullAddress}
                  </p>
                </div>

                {/* Country Office Phone Number */}
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Office Phone ({loc.country})
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3.5 py-2 text-sm font-bold text-brand-navy shadow-sm transition hover:border-brand-green hover:text-brand-dark-green"
                    >
                      <Phone className="h-4 w-4 text-brand-green" />
                      <span>{loc.phone}</span>
                    </a>
                    <a
                      href={loc.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200/70 px-3 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Business Enquiry & Communications"
              description="Reach out directly for general business enquiries, material requirements, or supplier onboarding."
            />

            <div className="mt-8 space-y-4">
              {/* Official Business Emails */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Business Emails
                    </p>
                    <div className="mt-2.5 space-y-2.5">
                      {officialEmails.map((item) => (
                        <div key={item.address} className="flex flex-col">
                          <a
                            href={`mailto:${item.address}`}
                            className="font-bold text-brand-navy hover:text-brand-green transition text-sm sm:text-base break-all"
                          >
                            {item.address}
                          </a>
                          <span className="text-xs text-slate-500 font-medium">
                            {item.label} — {item.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Phone Numbers */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Phone Numbers
                    </p>
                    <div className="mt-2.5 space-y-3">
                      {officialPhones.map((phone) => (
                        <div key={phone.number} className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="block text-xs font-semibold text-slate-500">
                              {phone.label}
                            </span>
                            <a
                              href={`tel:${phone.phoneRaw}`}
                              className="font-bold text-brand-navy hover:text-brand-green transition text-base"
                            >
                              {phone.number}
                            </a>
                          </div>
                          <a
                            href={`tel:${phone.phoneRaw}`}
                            className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-brand-dark-green hover:bg-brand-green hover:text-white transition"
                          >
                            <Phone className="h-3 w-3" /> Call
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Instant Messaging */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Quick Enquiry
                    </p>
                    <div className="mt-2.5 space-y-2">
                      {officialPhones.map((phone) => (
                        <div key={phone.whatsappUrl} className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-slate-600">
                            {phone.country} Desk: <strong className="text-slate-800">{phone.number}</strong>
                          </span>
                          <a
                            href={phone.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-600 hover:text-white transition"
                          >
                            <MessageCircle className="h-3 w-3" /> Chat on WhatsApp
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Operating Hours */}
              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-dark-green">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Business Hours
                  </p>
                  <p className="mt-1 font-bold text-brand-navy">{company.businessHours}</p>
                  <p className="mt-0.5 text-xs text-slate-500">Coordinated across Indian Standard Time & Turkey Time</p>
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
              {/* Direct Quotation Assistance */}
              <div className="rounded-xl border border-brand-green/30 bg-brand-green/5 p-6">
                <h4 className="font-bold text-brand-navy flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-dark-green" />
                  Direct Quotation & Tender Contacts
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Prefer direct tender submission or immediate quotation support? Reach our trading desk directly:
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Executive Desk:</span>
                    <a
                      href="mailto:my@aurexoninternational.com"
                      className="text-brand-dark-green hover:underline font-bold"
                    >
                      my@aurexoninternational.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">General Enquiries:</span>
                    <a
                      href="mailto:info@aurexoninternational.com"
                      className="text-brand-dark-green hover:underline font-bold"
                    >
                      info@aurexoninternational.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 pt-1 border-t border-brand-green/20">
                    <span className="text-slate-500">Phone (India):</span>
                    <a href={`tel:${officialPhones[0].phoneRaw}`} className="text-brand-navy hover:text-brand-green font-bold">
                      {officialPhones[0].number}
                    </a>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">Phone (Turkey):</span>
                    <a href={`tel:${officialPhones[1].phoneRaw}`} className="text-brand-navy hover:text-brand-green font-bold">
                      {officialPhones[1].number}
                    </a>
                  </div>
                </div>
              </div>

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
