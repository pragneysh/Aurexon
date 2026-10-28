import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, locations, metalCategories, officialEmails, officialPhones } from '../data/company';
import BrandLogo from './BrandLogo';

const companyLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Contact Us', '/contact'],
  ['Request a Quote', '/contact#quote'],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr_1.5fr] lg:px-8">
        <div>
          <Link to="/" aria-label="Aurexon home">
            <BrandLogo size="footer" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            {company.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-brand-lime">
            <span>Ferrous & Non-Ferrous Metals</span>
            <span>•</span>
            <span>Global Sourcing</span>
            <span>•</span>
            <span>Circular Recycling</span>
          </div>

          {/* Quick Business Contacts */}
          <div className="mt-6 space-y-2.5 rounded-lg border border-white/10 bg-white/5 p-4 text-xs">
            <p className="font-bold uppercase tracking-wider text-brand-lime text-[11px]">
              Official Business Contacts
            </p>
            <div className="space-y-1.5 text-white/80">
              {officialEmails.map((item) => (
                <div key={item.address} className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-brand-lime" />
                  <a
                    href={`mailto:${item.address}`}
                    className="hover:text-brand-lime transition font-medium truncate"
                    title={item.label}
                  >
                    {item.address}
                  </a>
                </div>
              ))}
              <div className="pt-1 border-t border-white/10 space-y-1">
                {officialPhones.map((p) => (
                  <div key={p.number} className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-brand-lime" />
                    <span className="text-white/60">{p.country}:</span>
                    <a
                      href={`tel:${p.phoneRaw}`}
                      className="hover:text-brand-lime transition font-semibold"
                    >
                      {p.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="footer-heading">Navigation</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {companyLinks.map(([label, href]) => (
              <li key={href}>
                <Link className="transition hover:text-brand-lime" to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Metal Categories</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {metalCategories.map((category) => {
              const param = category.replace(' Scrap', '').toLowerCase().replace(/\s+/g, '-');
              return (
                <li key={category}>
                  <Link
                    to={`/products?category=${param}`}
                    className="transition hover:text-brand-lime"
                  >
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Our Locations</h2>
          <div className="mt-4 space-y-5 text-sm text-white/75">
            {locations.map((loc) => (
              <div key={loc.id} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                  <div className="flex-1">
                    <strong className="block text-white text-sm font-bold">{loc.displayName}</strong>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{loc.fullAddress}</p>

                    {/* Direct Office Phone */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs">
                      <Phone className="h-3.5 w-3.5 text-brand-lime shrink-0" />
                      <span className="text-white/60">Phone:</span>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="font-bold text-white hover:text-brand-lime transition"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-brand-lime hover:underline inline-flex items-center gap-1"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Aurexon International LLP. All Rights Reserved.</p>
          <p className="text-white/50">Your Trusted Partner in Global Metal Scrap Trading</p>
        </div>
      </div>
    </footer>
  );
}
