import { Outlet } from 'react-router-dom';
import Header from '../UserMenu/UserMenu';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
