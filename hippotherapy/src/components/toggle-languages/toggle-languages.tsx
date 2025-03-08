'use client';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '@/lib/slices/language-slice';

const ToggleLanguages = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const handleClick = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex gap-3 ">
      <button type="button" onClick={() => handleClick('en')}>
        {t('En')}
      </button>
      <button type="button" onClick={() => handleClick('uk')}>
        {t('Uk')}
      </button>
    </div>
  );
};

export default ToggleLanguages;
