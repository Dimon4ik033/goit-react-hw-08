import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-row justify-between gap-10 items-center'>
      <h2>WELCOME, {user.name}</h2>
      <button className='btn btn-outline btn-error' onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
}
