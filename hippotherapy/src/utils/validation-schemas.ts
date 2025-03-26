import * as yup from 'yup';

export const emailValidationSchema = yup
  .string()
  .strict()
  .trim()
  .required('ErrorRequire')
  .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'ErrorValid')
  .max(255, 'ErrorLenght');
