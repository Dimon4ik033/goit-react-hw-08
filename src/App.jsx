import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUserThunk } from './redux/auth/operations';
import { Layout } from './components/Layout/Layout';
import { RestrictedRoute } from './components/RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<Register />} />} />
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
        <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
      </Routes>
    </Layout>
  );

  // return isRefreshing ? null : (
  //   <Routes>
  //     <Route
  //       path='/'
  //       element={
  //         <PrivateRoute>
  //           <Layout />
  //         </PrivateRoute>
  //       }
  //     >
  //       <Route index element={<Home />} />
  //       <Route path='/contacts' element={<Contacts />} />
  //     </Route>
  //     <Route
  //       path='/login'
  //       element={
  //         <PublicRoute>
  //           <Login />
  //         </PublicRoute>
  //       }
  //     />
  //     <Route
  //       path='/register'
  //       element={
  //         <PublicRoute>
  //           <Register />
  //         </PublicRoute>
  //       }
  //     />
  //     <Route path='*' element={<NotFound />} />
  //   </Routes>
  // );
}
