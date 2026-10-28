import { Link } from 'react-router-dom';

type PageHeaderProps = {
  title: string;
  description: string;
  image?: string;
};

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {image && (
        <img
          src={image}
          alt={title ? `${title} banner - Aurexon International LLP` : 'Aurexon International LLP'}
          className="absolute inset-0 h-full w-full object-cover opacity-28"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
          <Link to="/" className="hover:text-brand-lime">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>
        <p className="eyebrow text-brand-lime">Aurexon International LLP</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-normal sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{description}</p>
      </div>
    </section>
  );
}
