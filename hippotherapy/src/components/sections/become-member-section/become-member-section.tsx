'use client';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button/button';
import { Title } from '@/components/ui/title/title';
import style from './become-member-section.module.scss';

export const BecomeMemberSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section} id="member">
      <div className={style.block}>
        <Title text={t('BecomeMemberTitle')}></Title>
        <div className={style.subTitles}>
          <h3 className={style.step}>{t('Step')} 1</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepOne')}</p>
          <h3 className={style.step}>{t('Step')} 2</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepTwo')}</p>
          <h3 className={style.step}>{t('Step')} 3</h3>
          <p className={style.subTitle}>{t('BecomeMemberStepThree')}</p>
          <Button
            btnType="button"
            color="light"
            to="https://docs.google.com/forms/d/e/1FAIpQLSeoe0uN_w31BC-x2BSmlf-RxBJMXKQUipaJb2zao6IoC6NTnw/viewform"
          >
            {t('AddToCommunity')}
          </Button>
        </div>
      </div>
    </section>
  );
};
