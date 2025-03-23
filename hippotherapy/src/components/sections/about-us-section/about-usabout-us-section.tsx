'use client';
import { useTranslation } from 'react-i18next';

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-[372px] flex justify-center bg-yellow-950 py-15">
      <div className="max-w-[1440px] grid grid-cols-[1fr_2fr] gap-4">
        <h2 className="font-rubik text-[40px] leading-[60px] tracking-[0] font-extrabold">
          {t('AboutUs').toUpperCase()}
        </h2>
        <div>
          <p className="font-roboto text-base pb-2">{t('AboutTextOne')}</p>
          <p className="font-roboto text-base ">{t('AboutTextTwo')}</p>
        </div>
      </div>
    </section>
  );
};
