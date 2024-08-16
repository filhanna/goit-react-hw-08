import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from '@mui/material';
import { Navigation } from './Navigation';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export default function CustomAppBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />
            {!isLoggedIn ? (
              <Box>
                <Button href="/login" color="inherit" >
                  Login
                </Button>
                <Button href="/register" color="inherit">
                  Register
                </Button>
              </Box>
            ) : (
              <Box display="flex" alignItems="center">
                <Typography>{user.name}</Typography>
                <Button onClick={() => dispatch(logout())} color="inherit">
                  Log out
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
