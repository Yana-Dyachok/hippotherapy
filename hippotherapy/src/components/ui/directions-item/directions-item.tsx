'use client';
import { useTranslation } from 'react-i18next';

export const DirectionsItem = () => {
  const { t } = useTranslation();
  return (
    <li className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <p>{t('HowItWas')}</p>
    </li>
  );
};
