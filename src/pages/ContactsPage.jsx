import { ContactForm } from "../components/ContactForm/ContactForm";
import { Fiender } from "../components/Fiender/Fiender";
import { ContactList } from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts, addContact } from "../redux/contacts/operations";
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from "@mui/material";


const ContactsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(state => state.contact.contacts);
    const handleSubmit = (values, { resetForm }) => {
      if (contacts.some(contact => contact.name === values.name)) {
        alert(`${values.name} is already in contacts`);
      } else {
        dispatch(addContact(values));
        resetForm();
      }
    };
  return (
    <>
      <ContactForm initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} />
      <Fiender />
      <Typography components='h1' textAlign='center' marginTop='20px' variant="h5" fontWeight='bold' >Contacts</Typography>
      <ContactList  />
    </>
  );
};

export default ContactsPage;
