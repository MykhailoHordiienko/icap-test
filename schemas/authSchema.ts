import * as yup from 'yup';

export const logInSchema = yup
  .object({
    userName: yup
      .string()
      .required('Enter User Name')
      .min(4, 'Minimum 4 characters')
      .max(50, 'Maximum 50 characters'),
    password: yup
      .string()
      .required('Enter Password')
      .min(4, 'Minimum 4 characters')
      .max(50, 'Maximum 50 characters'),
  })
  .required();
