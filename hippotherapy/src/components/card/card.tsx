'use client';

import { useTranslation } from 'react-i18next';
import style from './card.module.scss';

export const CardInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={style.block}>
      <h3 className={style.title}>{t('InUkraine')}</h3>
      <div className={style.infoInner}>
        <div className={style.textBlock}>
          <p className={style.subTitle}>{t('Recipient')}</p>
          <p className={style.info}>{t('CharitableOrganization')}</p>
        </div>
        <div className={style.textBlock}>
          <p className={style.subTitle}>{t('CodeBank')}</p>
          <p className={style.info}>34567443</p>
        </div>
        <div className={style.textBlock}>
          <p className={style.subTitle}>IBAN</p>
          <p className={style.info}>UA23665443322236778000008765</p>
        </div>
        <div className={style.textBlock}>
          <p className={style.subTitle}>{t('Currency')}</p>
          <p className={style.info}>UAH</p>
        </div>
        <div className={style.textBlock}>
          <p className={style.subTitle}>{t('BankName')}</p>
          <p className={style.info}>{t('UnBank')}</p>
        </div>
        <div className={style.textBlock}>
          <p className={style.subTitle}>{t('PaymentPurpose')}</p>
          <p className={style.info}>{t('CharitableContribution')}</p>
        </div>
      </div>
    </div>
  );
};
