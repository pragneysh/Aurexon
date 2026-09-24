import { company } from '../data/company';

type BrandLogoProps = {
  className?: string;
  size?: 'nav' | 'footer';
};

const sizes = {
  nav: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.25rem]',
  footer: 'h-28 w-28',
};

export default function BrandLogo({ className = '', size = 'nav' }: BrandLogoProps) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-md bg-white p-1 shadow-sm ${sizes[size]} ${className}`}>
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        className="h-full w-full object-contain"
        width="443"
        height="476"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    </span>
  );
}
