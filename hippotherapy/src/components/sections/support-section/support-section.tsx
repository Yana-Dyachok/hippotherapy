'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import WayForPayImg from '../../../assets/svg/way-for-pay.svg';
import { CardInfo } from '@/components/card/card';
import { Payment } from '@/components/payment/payment';
import style from './support-section.module.scss';

export const SupportSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="support">
      <div className={style.block}>
        <h2 className={style.title}>{t('SupportUnion')}</h2>
        <div className={style.inner}>
          <div className={style.paymentBlock}>
            <Image
              src={WayForPayImg}
              alt="Way For Pay"
              width={271}
              height={54}
              priority
            />
            <Payment />
          </div>
          <CardInfo />
        </div>
      </div>
    </section>
  );
};
