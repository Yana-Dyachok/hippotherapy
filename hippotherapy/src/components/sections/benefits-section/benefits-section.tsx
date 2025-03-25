'use client';
import { useTranslation } from 'react-i18next';
import style from './benefits-section.module.scss';

export const BenefitsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.block}>
        <h2 className={style.title}>{t('BenefitsTitle')}</h2>
        <p className={style.subTitle}>{t('BenefitsSubTitle')}</p>
        <div className={style.descriptionsBlock}>
          <div className={style.descriptionsWrapper}>
            <h3 className={style.descriptionsTitle}>{t('BenefitsItemOne')}</h3>
            <ul className={style.descriptionsList}>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptOneItemOne')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptOneItemTwo')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptOneItemThree')}
              </li>
            </ul>
          </div>
          <div className={style.descriptionsWrapper}>
            <h3 className={style.descriptionsTitle}>{t('BenefitsItemTwo')}</h3>
            <ul className={style.descriptionsList}>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptTwoItemOne')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptTwoItemTwo')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptTwoItemThree')}
              </li>
            </ul>
          </div>
          <div className={style.descriptionsWrapper}>
            <h3 className={style.descriptionsTitle}>
              {t('BenefitsItemThree')}
            </h3>
            <ul className={style.descriptionsList}>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptThreeItemOne')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptThreeItemTwo')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptThreeItemThree')}
              </li>
            </ul>
          </div>
          <div className={style.descriptionsWrapper}>
            <h3 className={style.descriptionsTitle}>{t('BenefitsItemFour')}</h3>
            <ul className={style.descriptionsList}>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptFourItemOne')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptFourItemTwo')}
              </li>
              <li className={style.descriptionsItem}>
                {t('BenefitsDescriptFourItemThree')}
              </li>
            </ul>
          </div>
        </div>
        <p className={style.subTitle}>{t('BenefitsEndOne')}</p>
        <p className={style.subTitle}>{t('BenefitsEndTwo')}</p>
      </div>
    </section>
  );
};
