import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className='flex gap-2'>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  );
};
