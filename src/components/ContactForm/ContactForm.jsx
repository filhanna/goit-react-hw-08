import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Invalid phone number'),
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(4, 'auto'),
  maxWidth: 500,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '1.2rem',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const ContactForm = ({ initialValues, onSubmit }) => {
  return (
    <StyledPaper>
      <Typography variant="h4" gutterBottom>
        Phonebook
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={FormSchema}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Box sx={{ width: '100%' }}>
              <Field name="name">
                {({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(field.touched && field.error)}
                    helperText={<ErrorMessage name="name" />}
                  />
                )}
              </Field>
              <Field name="number">
                {({ field }) => (
                  <StyledTextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(field.touched && field.error)}
                    helperText={<ErrorMessage name="number" />}
                  />
                )}
              </Field>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                Add Contact
              </StyledButton>
            </Box>
          </Form>
        )}
      </Formik>
    </StyledPaper>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
