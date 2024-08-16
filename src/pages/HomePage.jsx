
import { Container, Typography, Box, Paper, Button, Link } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper elevation={6} sx={{ padding: 6, borderRadius: 4, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Welcome to Your Contact Book
        </Typography>
        <Typography variant="body1" sx={{ color: '#757575', marginBottom: 4 }}>
          Manage and access your contacts effortlessly. Add, edit, and delete contacts with just a few clicks.
        </Typography>


        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
          <Link href="/login" variant="body1" sx={{ marginRight: 4, color: '#3f51b5', textDecoration: 'none' }}>
            Login
          </Link>
          <Link href="/register" variant="body1" sx={{ color: '#3f51b5', textDecoration: 'none' }}>
            Register
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;
