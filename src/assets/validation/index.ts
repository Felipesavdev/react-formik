import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape ({
  email: Yup.string().email('E-mail invalido').required('Campo obrigatorio'),
  password: Yup.string().required('Campo obrigatorio'),
});
