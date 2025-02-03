import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { ProgressBar } from 'react-loader-spinner';

export default function ContactPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className='flex flex-col justify-center items-center mt-15'>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <span>
          {' '}
          <ProgressBar
            visible={true}
            height='80'
            width='80'
            color='#4fa94d'
            borderColor='white'
            ariaLabel='progress-bar-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </span>
      )}
      <ContactList />
    </div>
  );
}
