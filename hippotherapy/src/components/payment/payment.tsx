// 'use client';

// import { useState, useActionState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
// import Form from 'next/form';
// import { useTranslation } from 'react-i18next';
// import * as yup from 'yup';
// import { toast } from 'react-toastify';
// import InputItem from '../ui/input-item/input-item';
// import { Button } from '../ui/button/button';
// import { onSubmitActionMoney } from '@/utils/on-submit-action-money';
// import { moneyValidationSchema } from '@/utils/validation-schemas';
// import { PAYPAL_CLIENT_ID } from '../../../next.config';
// import style from './payment.module.scss';

// export const Payment = () => {
//   const theme = 'dark';
//   const { t } = useTranslation();
//   const [amount, setAmount] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);
//   const [showPayPal, setShowPayPal] = useState(false);

//   const onSubmit = async (prevState: string | '', formData: FormData) => {
//     const money = formData.get('money');

//     try {
//       await moneyValidationSchema.validate(money);
//       const result = await onSubmitActionMoney(formData);
//       setAmount(result.money);
//       toast.success('Success validation');
//       setShowPayPal(true);
//       setError('');
//       return 'Success';
//     } catch (validationError) {
//       if (validationError instanceof yup.ValidationError) {
//         setError(validationError.message);
//       } else {
//         setError('ErrorWrong');
//       }
//       return '';
//     }
//   };

//   const [message, formAction] = useActionState(onSubmit, '');

//   return (
//     <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID! }}>
//       {showPayPal ? (
//         <PayPalButtons
//           style={{ layout: 'vertical' }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               intent: 'CAPTURE',
//               purchase_units: [
//                 {
//                   amount: {
//                     currency_code: 'UAH',
//                     value: parseFloat(amount).toFixed(2),
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={async (data, actions) => {
//             if (!actions.order) return Promise.resolve();

//             const details = await actions.order.capture();
//             const name = details?.payer?.name?.given_name;

//             if (name) {
//               toast.success(`Transaction completed by ${name}`);
//             }

//             return Promise.resolve();
//           }}
//         />
//       ) : (
//         <Form action={formAction} className={style.form}>
//           <h3 className={style.title}>{t('Contribution')}</h3>
//           <div className={style.inputBlock}>
//             <InputItem
//               name="money"
//               type="text"
//               placeholder={t('EnterAmount')}
//               error={error || ''}
//             />
//             <p>UAH</p>
//           </div>
//           <p className={style.message}>{t(message)}</p>
//           <Button btnType="submit" color={theme}>
//             {t('Support')}
//           </Button>
//         </Form>
//       )}
//     </PayPalScriptProvider>
//   );
// };

'use client';

import { useState, useActionState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { RootState } from '../../lib/store';
import InputItem from '../ui/input-item/input-item';
import { Button } from '../ui/button/button';
import {
  WFP_MERCHANT_ACCOUNT,
  WFP_MERCHANT_DOMAIN,
  WFP_MERCHANT_PHONE,
  WFP_MERCHANT_EMAIL,
  WFP_PRODUCT_NAME,
} from '../../../next.config';
import { onSubmitActionMoney } from '@/utils/on-submit-action-money';
import { moneyValidationSchema } from '@/utils/validation-schemas';
import style from './payment.module.scss';

declare global {
  interface Window {
    Wayforpay: new () => {
      run: (
        options: Record<string, unknown>,
        callbacks?: {
          onApproved?: () => void;
          onDeclined?: () => void;
          onPending?: () => void;
        },
      ) => void;
    };
  }
}

export const Payment = () => {
  const theme = 'dark';
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const language = useSelector((state: RootState) => state.language.language);

  const onSubmit = async (prevState: string | '', formData: FormData) => {
    const money = formData.get('money');

    try {
      await moneyValidationSchema.validate(money);
      const result = await onSubmitActionMoney(formData);
      toast.success(t('SuccessValidation'));
      setError('');
      handleWayForPayPayment(result.money);
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

  const handleWayForPayPayment = (amount: string) => {
    const wayforpay = new window.Wayforpay();

    const options = {
      merchantAccount: WFP_MERCHANT_ACCOUNT,
      merchantDomainName: WFP_MERCHANT_DOMAIN,
      clientEmail: WFP_MERCHANT_EMAIL,
      clientPhone: WFP_MERCHANT_PHONE,
      productName: [WFP_PRODUCT_NAME],
      orderReference: 'ORDER_' + Date.now(),
      orderDate: Math.floor(Date.now() / 1000),
      amount: parseFloat(amount),
      currency: 'UAH',
      productPrice: [parseFloat(amount)],
      productCount: [1],
      clientFirstName: 'John',
      clientLastName: 'Doe',
      language: language.toLowerCase(),
    };

    wayforpay.run(options, {
      onApproved: () => toast.success(t('PaymentSuccess')),
      onDeclined: () => toast.error(t('PaymentDeclined')),
      onPending: () => toast.info(t('PaymentPending')),
    });
  };

  return (
    <form action={formAction} className={style.form}>
      <h3 className={style.title}>{t('Contribution')}</h3>
      <div className={style.inputBlock}>
        <InputItem
          name="money"
          type="text"
          placeholder={t('EnterAmount')}
          error={error || ''}
        />
        <p>UAH</p>
      </div>
      <p className={style.message}>{t(message)}</p>
      <Button btnType="submit" color={theme}>
        {t('Support')}
      </Button>
    </form>
  );
};
