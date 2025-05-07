'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import WayForPayImg from '../../../assets/svg/way-for-pay.svg';
import { CardInfo } from '@/components/card/card';
import { Payment } from '@/components/payment/payment';
import { Title } from '@/components/ui/title/title';
import style from './support-section.module.scss';

export const SupportSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="support">
      <div className={style.block}>
        <div className={style.titleBlock}>
          <Title text={t('SupportUnion')}></Title>
        </div>
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
