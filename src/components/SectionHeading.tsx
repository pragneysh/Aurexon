type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-brand-lime' : 'text-brand-dark-green'}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-black tracking-normal sm:text-4xl ${light ? 'text-white' : 'text-brand-navy'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-8 ${light ? 'text-white/72' : 'text-slate-600'}`}>{description}</p>}
    </div>
  );
}
