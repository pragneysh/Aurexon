import ButtonLink from './ButtonLink';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Looking for Metal Scrap Supply?',
  description = 'Tell us your material requirements across aluminium, copper, brass, ferrous, or stainless steel scrap and our team will get in touch.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="eyebrow text-brand-lime">Request Sourcing Support</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-normal text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/products">Explore Our Products</ButtonLink>
          <ButtonLink to="/contact#quote" variant="light">
            Send an Enquiry
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
