'use client';
import { useTranslation } from 'react-i18next';
import style from './become-member-section.module.scss';

export const BecomeMemberSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="member">
      <div className={style.block}>
        <h2 className={style.title}>{t('BecomeMemberTitle')}</h2>
        <div className={style.subTitles}>
          <h3 className={style.step}>{t('Step')} 1</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepOne')}</p>
          <h3 className={style.step}>{t('Step')} 2</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepTwo')}</p>
          <h3 className={style.step}>{t('Step')} 3</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepThree')}</p>
        </div>
      </div>
    </section>
  );
};
