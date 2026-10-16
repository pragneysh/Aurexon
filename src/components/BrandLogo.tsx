import { company } from '../data/company';

type BrandLogoProps = {
  className?: string;
  size?: 'nav' | 'footer' | 'large';
};

const sizes = {
  nav: 'h-14 sm:h-16 md:h-20 w-auto',
  footer: 'h-24 sm:h-28 md:h-32 w-auto',
  large: 'h-32 sm:h-40 w-auto',
};

export default function BrandLogo({ className = '', size = 'nav' }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow ${className}`}
      title={company.name}
    >
      <img
        src={company.logo}
        alt={`${company.name} - Global Metal Scrap Trading`}
        className={`${sizes[size]} object-contain`}
        width="443"
        height="476"
        loading="eager"
        decoding="async"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    </span>
  );
}
