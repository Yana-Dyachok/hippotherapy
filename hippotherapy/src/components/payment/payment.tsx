'use client';

import { useState, useActionState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Form from 'next/form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import InputItem from '../ui/input-item/input-item';
import { Button } from '../ui/button/button';
import { onSubmitActionMoney } from '@/utils/on-submit-action-money';
import { moneyValidationSchema } from '@/utils/validation-schemas';
import { PAYPAL_CLIENT_ID } from '../../../next.config';
import style from '../subscribe/subscribe.module.scss';

export const Payment = () => {
  const theme = 'dark';
  const { t } = useTranslation();
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showPayPal, setShowPayPal] = useState(false);

  const onSubmit = async (prevState: string | '', formData: FormData) => {
    const money = formData.get('money');

    try {
      await moneyValidationSchema.validate(money);
      const result = await onSubmitActionMoney(formData);
      setAmount(result.money);
      toast.success('Success validation');
      setShowPayPal(true);
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
    <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID! }}>
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
      {showPayPal && (
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  amount: {
                    currency_code: 'UAH',
                    value: parseFloat(amount).toFixed(2),
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            if (!actions.order) return Promise.resolve();

            const details = await actions.order.capture();
            const name = details?.payer?.name?.given_name;

            if (name) {
              toast.success(`Transaction completed by ${name}`);
            }

            return Promise.resolve();
          }}
        />
      )}
    </PayPalScriptProvider>
  );
};
