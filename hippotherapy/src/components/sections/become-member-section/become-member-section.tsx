'use client';
import { useTranslation } from 'react-i18next';

export const BecomeMemberSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-93 flex justify-center bg-green-900 py-15">
      <div className="max-w-360 grid grid-cols-[1fr_2fr]">
        <h2 className="font-rubik text-5xl leading-16 tracking-[0] font-extrabold max-w-[300px]">
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
