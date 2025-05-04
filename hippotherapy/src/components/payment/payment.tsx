'use client';

import { useState, useActionState } from 'react';
import Form from 'next/form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import InputItem from '../ui/input-item/input-item';
import { Button } from '../ui/button/button';
import { onSubmitActionMoney } from '@/utils/on-submit-action-money';
import { moneyValidationSchema } from '@/utils/validation-schemas';
import style from '../subscribe/subscribe.module.scss';

export const Payment = () => {
  const theme = 'dark';
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (prevState: string | '', formData: FormData) => {
    const money = formData.get('money');

    try {
      await moneyValidationSchema.validate(money);
      const result = await onSubmitActionMoney(formData);
      console.log(result);
      setError('');
      return 'Success';
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.message);
      } else {
        setError('ErrorWrong');
      }
      return '';
    }
  };

  const [message, formAction] = useActionState(onSubmit, '');

  return (
    <Form action={formAction} className={style.form}>
      <h3 className={style.title}>{t('Contribution')}</h3>
      <InputItem
        name="money"
        type="text"
        placeholder={t('EnterAmount')}
        error={error || ''}
      />
      <p className={style.message}>{t(message)}</p>
      <Button btnType="submit" color={theme}>
        {t('Support')}
      </Button>
    </Form>
  );
};
