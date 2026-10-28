import ButtonLink from '../components/ButtonLink';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Aurexon International LLP"
        description="The requested page could not be found on Aurexon International."
        noindex={true}
      />
      <section className="grid min-h-[60vh] place-items-center px-4 text-center">
        <div>
          <p className="eyebrow text-brand-dark-green">404</p>
          <h1 className="mt-3 text-4xl font-black tracking-normal text-brand-navy">Page not found</h1>
          <p className="mt-4 text-slate-600">The page you are looking for is not available.</p>
          <ButtonLink to="/" className="mt-8">
            Return Home
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
