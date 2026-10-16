import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/company';
import BrandLogo from './BrandLogo';
import ButtonLink from './ButtonLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8" aria-label="Primary">
        <NavLink to="/" aria-label="Aurexon home" onClick={() => setIsOpen(false)} className="flex items-center">
          <BrandLogo size="nav" />
        </NavLink>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? 'bg-brand-green/10 text-brand-dark-green'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink to="/contact#quote">Request a Quote</ButtonLink>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-brand-navy lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-bold ${
                    isActive ? 'bg-brand-green/10 text-brand-dark-green' : 'text-slate-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact#quote" className="mt-2 text-center" onClick={() => setIsOpen(false)}>
              Request a Quote
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
