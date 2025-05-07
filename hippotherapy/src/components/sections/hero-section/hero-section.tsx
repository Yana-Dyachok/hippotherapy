'use client';
import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/button/button';
import heroImg from '../../../assets/img/hero.jpg';
import { Title } from '@/components/ui/title/title';
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
          <Title className={style.title} text={t('HeroTitle')}></Title>
          <p className={style.subTitle}>{t('HeroSubtitle')}</p>
          <Button btnType="button" color="light" to="#member">
            {t('AddToCommunity')}
          </Button>
        </div>
      </div>
    </section>
  );
};
