import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <h2>Contacts book</h2>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
      <nav className='flex gap-3 items-center'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        {isLoggedIn ? (
          <button className='btn btn-outline btn-error' onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
