import css from './Contact.module.css';
import { IoIosCall } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <li className={css.listItem}>
      <div className={css.infContainer}>
        <p>
          <span className={css.svgIcon}>
            <FaUser className={css.svg} />
            {name}
          </span>
        </p>
        <p>
          <span className={css.svgIcon}>
            <IoIosCall />
            {number}
          </span>
        </p>
      </div>
      <button type='button' className='btn btn-error' onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
