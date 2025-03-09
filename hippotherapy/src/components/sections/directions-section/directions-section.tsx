'use client';
import { useTranslation } from 'react-i18next';
import DirectionsItem from '@/components/ui/directions-item/directions-item';

const DirectionsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <h2>{t('Directions')}</h2>
      <h3>{t('DirectSubtitle')}</h3>
      <DirectionsItem />
    </section>
  );
};

export default DirectionsSection;
