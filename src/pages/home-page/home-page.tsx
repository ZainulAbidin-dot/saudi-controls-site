import { AboutSection } from './about-section';
import { ContactSection } from './contact-section';
import { GallerySection } from './gallery-section';
import { HeroSection } from './hero-section';
import { LatestNewsSection } from './latest-news';
import { OperationAndMaintenanceSection } from './operation-and-maintenance-section';
import { PartnersSection } from './partners-section';
import { SolutionsSection } from './solutions-section';

export function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <LatestNewsSection />
      <OperationAndMaintenanceSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
