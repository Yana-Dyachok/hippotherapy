'use client';

import { useState, useActionState } from 'react';
import Form from 'next/form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import InputItem from '../ui/input-item/input-item';
import { Button } from '../ui/button/button';
import onSubmitAction from '@/utils/on-submit-action';
import { emailValidationSchema } from '@/utils/validation-schemas';
import { sendEmail } from '@/app/api/send-email';
import style from './subscribe.module.scss';

export const Subscribe = () => {
  const theme = 'dark';
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (state: 'Success' | '', formData: FormData) => {
    const data = await onSubmitAction(formData);
    try {
      await emailValidationSchema.validate(data.email);
      const response = await sendEmail(data);
      toast.success('Success validation');
      setError('');
      return response;
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
      <h3 className={style.title}>{t('Subscribe')}</h3>
      <InputItem
        name="email"
        type="text"
        placeholder="example@gmail.com"
        error={error || ''}
      />
      <p className={style.message}>{t(message)}</p>
      <Button btnType="submit" color={theme}>
        {t('Submit')}
      </Button>
    </Form>
  );
};
