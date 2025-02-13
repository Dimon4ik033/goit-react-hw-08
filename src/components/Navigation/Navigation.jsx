import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className='flex gap-5'>
      <NavLink to='/'>Home</NavLink>
      {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
    </nav>
  );
};
