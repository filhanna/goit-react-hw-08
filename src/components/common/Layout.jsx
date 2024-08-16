import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
