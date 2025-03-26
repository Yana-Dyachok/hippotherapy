'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Button } from '@/components/ui/button/button';
import style from './not-found.module.scss';

const NotFoundContent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <h1>{t('ErrorMessage')}</h1>
        <Link href="/" passHref>
          <Button btnType="button" color="dark">
            {t('BackToMain')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundContent;
