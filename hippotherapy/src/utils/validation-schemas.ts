import * as yup from 'yup';

export const emailValidationSchema = yup
  .string()
  .strict()
  .trim()
  .required('ErrorRequire')
  .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'ErrorValid')
  .max(255, 'ErrorLenght');

export const moneyValidationSchema = yup
  .string()
  .strict()
  .trim()
  .required('ErrorRequire')
  .matches(/^\d+(\.\d{1,2})?$/, 'ErrorValidMoney')
  .max(50, 'ErrorLenghtMoney');
