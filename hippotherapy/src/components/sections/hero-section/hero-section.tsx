'use client';
import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/button/button';
import heroImg from '../../../assets/img/hero.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="h-221 flex items-center justify-start bg-cover bg-center bg-no-repeat px-50"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="max-w-360">
        <div className="max-w-188 flex-col">
          <h1 className="text-5xl pb-10">{t('HeroTitle')}</h1>
          <p className="text-3xl pb-10">{t('HeroSubtitle')}</p>
          <Button btnType="button" color="light">
            {t('AddToCommunity')}
          </Button>
        </div>
      </div>
    </section>
  );
};
