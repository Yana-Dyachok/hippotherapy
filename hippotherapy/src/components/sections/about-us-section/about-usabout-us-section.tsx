'use client';
import { useTranslation } from 'react-i18next';
import { Title } from '@/components/ui/title/title';
import style from './about-us-section.module.scss';

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="about-us">
      <div className={style.block}>
        <Title className={style.title} text={t('AboutUs')}></Title>
        <div className={style.subTitles}>
          <p className={style.subTitle}>{t('AboutTextOne')}</p>
          <p className={style.subTitle}>{t('AboutTextTwo')}</p>
        </div>
      </div>
    </section>
  );
};
