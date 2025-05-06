'use client';
import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/button/button';
import heroImg from '../../../assets/img/hero.jpg';
import style from './hero-section.module.scss';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className={style.hero}
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className={style.wrapper}>
        <div className={style.textBlock}>
          <h1 className={style.title}>{t('HeroTitle')}</h1>
          <p className={style.subTitle}>{t('HeroSubtitle')}</p>
          <Button btnType="button" color="light" to="#member">
            {t('AddToCommunity')}
          </Button>
        </div>
      </div>
    </section>
  );
};
