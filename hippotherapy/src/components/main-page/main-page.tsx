'use client';
import { useTranslation } from 'react-i18next';
import Button from '../ui/button/button';
const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button btnType="button" to="https://www.youtube.com/watch?v=d89Hnc6kUgE">
        {t('HowItWas')}
      </Button>
    </div>
  );
};

export default MainPage;
