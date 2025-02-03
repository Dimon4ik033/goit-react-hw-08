import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmit = (values, options) => {
    dispatch(addContacts(values));
    options.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{4}$/, 'Number format must be 000-00-00')
      .required('Number is required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form className={css.form}>
          <div className={css.container}>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />
            <ErrorMessage name='name' component='div' style={{ color: 'red' }} />
          </div>
          <div className={css.container}>
            <label htmlFor='number'>Number</label>
            <Field type='text' id='number' name='number' />
            <ErrorMessage name='number' component='div' style={{ color: 'red' }} />
          </div>
          <button type='submit' className='btn btn-active btn-success'>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
