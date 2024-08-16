import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/slice';
import { TextField } from '@mui/material';

export const Fiender = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      type="text"
      placeholder="Search contacts by name"
      onChange={(event) => {
        dispatch(updateFilter(event.target.value));
      }}
      variant="outlined"
      fullWidth
      sx={{
        marginTop: 2,
        width: 300,
        display: 'flex',
        margin: '0 auto',
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    />
  );
};




