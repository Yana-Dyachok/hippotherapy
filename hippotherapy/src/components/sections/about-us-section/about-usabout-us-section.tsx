'use client';
import { useTranslation } from 'react-i18next';
import style from './about-us-section.module.scss';

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="about-us">
      <div className={style.block}>
        <h2 className={style.title}>{t('AboutUs').toUpperCase()}</h2>
        <div className={style.subTitles}>
          <p className={style.subTitle}>{t('AboutTextOne')}</p>
          <p className={style.subTitle}>{t('AboutTextTwo')}</p>
        </div>
      </div>
    </section>
  );
};
