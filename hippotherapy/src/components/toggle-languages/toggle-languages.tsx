'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../lib/store';
import { setLanguage } from '@/lib/slices/language-slice';

export const ToggleLanguages = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const language = useSelector((state: RootState) => state.language.language);
  const handleClick = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        disabled={language === 'EN'}
        className="px-4 py-2 text-[#000000]  disabled:text-[#CFCCC7] disabled:cursor-not-allowed"
        onClick={() => handleClick('EN')}
      >
        {t('EN')}
      </button>
      <span className=" text-[#CFCCC7]">|</span>
      <button
        type="button"
        disabled={language === 'UA'}
        className="px-4 py-2 text-[#000000]  disabled:text-[#CFCCC7] disabled:cursor-not-allowed"
        onClick={() => handleClick('UA')}
      >
        {t('UA')}
      </button>
    </div>
  );
};
