'use client';
import { useTranslation } from 'react-i18next';
import { DirectionsSection } from '../sections/directions-section/directions-section';
import { AboutUsSection } from '../about-us/about-us';
import { HeroSection } from '../sections/directions-section/hero/hero';
import { Button } from '../ui/button/button';
export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex-col">
      <HeroSection />
      <DirectionsSection />
      <AboutUsSection />
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
