import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './common/Layout';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import RestrictedRoute from './common/RestrictedRoute';
import PrivateRoute from './common/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/register',
        element: <RestrictedRoute component={RegistrationPage} />,
      },
      {
        path: '/login',
        element: <RestrictedRoute component={LoginPage} />,
      },
      {
        path: '/contacts',
        element: <PrivateRoute component={ContactsPage} />,
      },
    ],
  },
]);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Typography>Loading...</Typography>
  }
  return <RouterProvider router={router} />;
};
