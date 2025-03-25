'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../lib/store';
import { setLanguage } from '@/lib/slices/language-slice';
import style from './toggle-languages.module.scss';

export const ToggleLanguages = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const language = useSelector((state: RootState) => state.language.language);
  const handleClick = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={style.buttons}>
      <button
        type="button"
        disabled={language === 'UA'}
        className={style.button}
        onClick={() => handleClick('UA')}
      >
        {t('UA')}
      </button>
      <button
        type="button"
        disabled={language === 'EN'}
        className={style.button}
        onClick={() => handleClick('EN')}
      >
        {t('EN')}
      </button>
    </div>
  );
};
