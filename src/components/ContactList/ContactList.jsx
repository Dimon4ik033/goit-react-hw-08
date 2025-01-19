import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.list}>
            {filteredData.map(contact => (
                <Contact {...contact} key={contact.id} />
            ))}
        </ul>
    );
};
