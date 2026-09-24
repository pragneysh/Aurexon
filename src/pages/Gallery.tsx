import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { images } from '../data/images';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | Aluminium Scrap Materials & Industrial Recycling"
        description="View industrial aluminium scrap, recyclable material, processing, warehouse and dispatch imagery for Aurexon International LLP."
      />
      <PageHeader title="Gallery" description="A modern industrial gallery for aluminium scrap materials, recycling support, warehouse handling and dispatch." image={images.warehouse} />
      <section className="section">
        <SectionHeading eyebrow="Industrial Gallery" title="Materials, processing, warehouse and dispatch" align="center" />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
