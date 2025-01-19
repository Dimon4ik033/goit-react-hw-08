import css from './Contact.module.css';
import { IoIosCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

  return (
      <li className={css.listItem}>
          <div className={css.infContainer}>
              <p><span className={css.svgIcon}><FaUser className={css.svg} />{name}</span></p>
              <p><span className={css.svgIcon}><IoIosCall /></span>{number}</p>
          </div>
          <button type="button" className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};
