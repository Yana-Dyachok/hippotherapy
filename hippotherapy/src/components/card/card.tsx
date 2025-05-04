'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './card.module.scss';

export const CardInfo = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleClick = (flag: boolean): void => {
    setIsActive(flag);
  };

  return (
    <div className={style.block}>
      <div className={style.buttons}>
        <button
          className={`${style.buttonTitle} ${isActive ? style.active : ''}`}
          onClick={() => handleClick(true)}
        >
          {t('InUkraine')}
        </button>
        <button
          className={`${style.buttonTitle} ${isActive ? '' : style.active}`}
          onClick={() => handleClick(false)}
        >
          {t('FromAbroad')}
        </button>
      </div>
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
