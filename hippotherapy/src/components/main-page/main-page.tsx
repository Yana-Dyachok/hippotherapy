'use client';
import { useTranslation } from 'react-i18next';
import { DirectionsSection } from '../sections/directions-section/directions-section';
import { AboutUsSection } from '../sections/about-us-section/about-usabout-us-section';
import { HeroSection } from '../sections/hero-section/hero-section';
import { BecomeMemberSection } from '../sections/become-member-section/become-member-section';
import { HelpSection } from '../sections/help-section/help-section';
import { Button } from '../ui/button/button';
export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex-col">
      <HeroSection />
      <AboutUsSection />
      <HelpSection />
      <DirectionsSection />
      <BecomeMemberSection />
      <Button
        btnType="button"
        color="light"
        to="https://www.youtube.com/watch?v=d89Hnc6kUgE"
      >
        {t('HowItWas')}
      </Button>
    </main>
  );
};
