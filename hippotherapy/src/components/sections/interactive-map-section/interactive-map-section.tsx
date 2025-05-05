'use client';

import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
const StaticMapWithLink = dynamic(
  () => import('./static-map').then((mod) => mod.default),
  { ssr: false },
);
import style from './interactive-map-section.module.scss';

export const InteractiveMapSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{t('InteractiveMap')}</h2>
        <div className={style.block}>
          <h3 className={style.subTitle}>{t('InteractiveMapText')}</h3>
          <StaticMapWithLink />
        </div>
      </div>
    </section>
  );
};
