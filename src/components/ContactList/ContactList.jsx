import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, CircularProgress, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import Notiflix from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(state => state.contact.loading);
  const error = useSelector(state => state.contact.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
   Notiflix.Notify.error(error);
  }

  return (
    <List sx={{ maxWidth: 500, margin: '0 auto' }}>
      {contacts.map(({ name, id, number }) => (
        <ListItem key={id} sx={{ borderBottom: '1px solid #ddd' }}>
          <ListItemText
            primary={<Typography variant="h6">{name}</Typography>}
            secondary={<Typography variant="body2" color="text.secondary">{number}</Typography>}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
              <DeleteIcon sx={{ color: '#777', '&:hover': { color: '#f00' } }} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

