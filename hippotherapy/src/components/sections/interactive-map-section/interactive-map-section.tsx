'use client';

import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button/button';

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
          <div className={style.infoBlock}>
            <h3 className={style.subTitle}>{t('InteractiveMapText')}</h3>
            <Button
              btnType="button"
              color="dark"
              to="https://www.google.com/maps/d/u/0/viewer?mid=1_SBd-5el7fLfIg-NxVFLSTqDN7Es6H4&ll=50.36241648403916%2C15.023544700000002&z=5"
            >
              {t('GoToMap')}
            </Button>
          </div>
          <StaticMapWithLink />
        </div>
      </div>
    </section>
  );
};
