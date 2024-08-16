import { Box, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box display="flex" gap="20px">
      <Link color="#fff" href="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link color="#fff" href="/contacts">
          Contacts
        </Link>
      )}
    </Box>
  );
};
