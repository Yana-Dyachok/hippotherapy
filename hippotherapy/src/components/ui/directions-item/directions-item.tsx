'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import directImg from '../../../assets/logo/logo.jpg';

export const DirectionsItem = () => {
  const { t } = useTranslation();
  return (
    <li className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <Image src={directImg} alt="logo" width={20} height={20} priority />
      <p>{t('HowItWas')}</p>
    </li>
  );
};
