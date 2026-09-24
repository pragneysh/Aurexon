import ButtonLink from './ButtonLink';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="eyebrow text-brand-lime">Request Support</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-normal text-white sm:text-4xl">
            Looking for Reliable Aluminium Scrap Supply?
          </h2>
          <p className="mt-4 max-w-2xl text-white/72">Tell us your material requirements and our team will get in touch.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact#quote">Request a Quote</ButtonLink>
          <ButtonLink to="/contact" variant="light">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
