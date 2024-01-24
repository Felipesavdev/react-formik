import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { LoginSchema } from "../validation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState()
  const URL = useNavigate() 
  const hendleSubmit = async (values) => {
    try {     
      console.log(values)
      if(values.email === 'japadev@gmail.com' && values.password === '123' )
        URL('/Logado')
      else throw new Error()
      
    } catch (error) {
      setLoginError('Senha ou Email está incorreto')
    }
  }
 return (
    <div>
     <h1>Login</h1>
     <Formik
     initialValues = {{email: '', password:''}}
     validationSchema={LoginSchema} 
     onSubmit = {hendleSubmit}
     >
      <Form>
        <div>
          <label htmlFor='email' className='form-label'>Email</label>
          <Field type='email' name='email' id='email' className='form-control' ></Field>
          <ErrorMessage name='email'></ErrorMessage>
        </div>
        <div>
          <label htmlFor='email' className='form-label'>Password</label>
          <Field type='password' name='password' id='password' className='form-control' ></Field>
          <ErrorMessage name="password"></ErrorMessage>
        </div>
        <button type="submit" >Login</button>
      </Form>
     </Formik>
     {loginError && <p>{loginError}</p> }
    </div>
  );
}
export default Login;