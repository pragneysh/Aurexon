import { Link } from 'react-router-dom';
import { company } from '../data/company';
import BrandLogo from './BrandLogo';

const companyLinks = [
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
];

const solutionLinks = ['Aluminium Scrap', 'Scrap Sourcing', 'Bulk Supply', 'Recycling Support'];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.15fr] lg:px-8">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Reliable aluminium scrap sourcing, trading and recycling support for industrial buyers and material partners.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Company</h2>
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
          <h2 className="footer-heading">Solutions</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {solutionLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <dl className="mt-4 space-y-3 text-sm text-white/70">
            <div>
              <dt className="text-white">Address</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt className="text-white">Phone</dt>
              <dd>{company.phone}</dd>
            </div>
            <div>
              <dt className="text-white">Email</dt>
              <dd>{company.email}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/60">
        Copyright Aurexon International LLP. All Rights Reserved.
      </div>
    </footer>
  );
}
