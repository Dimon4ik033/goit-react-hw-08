import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import css from './Login.module.css';

export default function Login() {
  const initialValues = {
    password: '',
    email: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    options.resetForm();
  };

  return (
    <div className={css.section}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/4'>
          <h3 className='text-center font-bold'>Login</h3>
          <label className='flex flex-col gap-2'>
            <span>Email:</span>
            <Field className='p-2 border-2 border-black shadow-md rounded-md' name='email' type='email' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password:</span>
            <Field className='p-2 border-2 border-black shadow-md rounded-md' name='password' type='password' />
          </label>
          <button className='btn btn-outline btn-accent border-2 cursor-pointer' type='submit'>
            Login
          </button>
          <p>
            You dont have account?{' '}
            <Link className='text-teal-500' to='/register'>
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
