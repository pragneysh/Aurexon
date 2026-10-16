import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: 'bg-brand-green text-white hover:bg-brand-dark-green shadow-lg shadow-brand-green/20',
  secondary: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
  outline: 'border border-brand-navy/20 bg-white text-brand-navy hover:border-brand-green hover:text-brand-dark-green',
  light: 'border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-brand-navy',
};

export default function ButtonLink({ to, children, variant = 'primary', className = '', onClick }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
