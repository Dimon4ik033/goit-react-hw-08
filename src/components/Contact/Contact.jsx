import css from './Contact.module.css';
import { IoIosCall } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOps';

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
          </span>
          {number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
