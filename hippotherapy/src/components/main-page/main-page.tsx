import { DirectionsSection } from '../sections/directions-section/directions-section';
import { AboutUsSection } from '../sections/about-us-section/about-usabout-us-section';
import { HeroSection } from '../sections/hero-section/hero-section';
import { BecomeMemberSection } from '../sections/become-member-section/become-member-section';
import { HelpSection } from '../sections/help-section/help-section';
import { BenefitsSection } from '../sections/benefits-section/benefits-section';
import { PhotoGallerySection } from '../sections/photo-gallery-section/photo-gallery-section';
import { NewsSection } from '../sections/news-section/news-section';
import { PartnersSection } from '../sections/partners-section/partners-section';

export const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <HelpSection />
      <DirectionsSection />
      <BenefitsSection />
      <BecomeMemberSection />
      <PhotoGallerySection />
      <NewsSection />
      <PartnersSection />
    </main>
  );
};
