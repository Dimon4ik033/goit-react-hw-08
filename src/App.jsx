import ContactForm from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}