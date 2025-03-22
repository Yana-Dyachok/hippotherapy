'use client';
import { useTranslation } from 'react-i18next';

export const BecomeMemberSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-[372px] flex justify-center bg-[#2C413A] py-15">
      <div className="max-w-[1440px] grid grid-cols-[1fr_2fr]">
        <h2 className="font-rubik text-[40px] leading-[60px] tracking-[0] font-extrabold max-w-[300px]">
          {t('BecomeMemberTitle')}
        </h2>
        <div>
          <h3>{t('Step')} 1</h3>
          <p className="font-roboto text-base pb-2">
            {t('BecomeMemberStepOne')}
          </p>
          <h3>{t('Step')} 2</h3>
          <p className="font-roboto text-base ">{t('BecomeMemberStepTwo')}</p>
          <h3>{t('Step')} 3</h3>
          <p className="font-roboto text-base pb-2">
            {t('BecomeMemberStepThree')}
          </p>
        </div>
      </div>
    </section>
  );
};
