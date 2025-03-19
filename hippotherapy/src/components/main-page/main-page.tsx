'use client';
import { useTranslation } from 'react-i18next';
import { DirectionsSection } from '../sections/directions-section/directions-section';
import { AboutUsSection } from '../about-us/about-us';
import { Button } from '../ui/button/button';
export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
