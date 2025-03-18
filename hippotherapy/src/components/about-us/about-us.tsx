'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import aboutUsImg from '../../assets/img/about-img.png';

const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>{t('AboutUs')}</h2>
      <div>
        <div>
          <p>{t('AboutTextOne')}</p>
          <p>{t('AboutTextTwo')}</p>
        </div>
        <Image src={aboutUsImg} alt="logo" width={80} height={60} priority />
      </div>
    </section>
  );
};

export default AboutUsSection;
