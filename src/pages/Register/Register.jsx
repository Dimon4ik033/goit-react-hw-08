import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import css from './Register.module.css';

export default function Register() {
  const initialValues = {
    password: '',
    email: '',
    name: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'));
    options.resetForm();
  };

  return (
    <div className={css.section}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/4'>
          <h3 className='text-center font-bold'>Register</h3>
          <label className='flex flex-col gap-2'>
            <span>Name:</span>
            <Field className='p-2 border-2 border-black shadow-md rounded-md' name='name' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Email:</span>
            <Field className='p-2 border-2 border-black shadow-md rounded-md' name='email' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password:</span>
            <Field className='p-2 border-2 border-black shadow-md rounded-md' name='password' type='password' />
          </label>
          <button className='btn btn-outline btn-accent border-2 cursor-pointer' type='submit'>
            Register
          </button>
          <p>
            You already have account?{' '}
            <Link className='text-teal-500' to='/login'>
              Login now!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
