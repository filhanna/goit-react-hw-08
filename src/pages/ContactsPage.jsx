import { ContactForm } from "../components/ContactForm/ContactForm";
import { Fiender } from "../components/Fiender/Fiender";
import { ContactList } from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts, addContact } from "../redux/contacts/operations";
import { useDispatch, useSelector } from 'react-redux';


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
      <h1>Contacts</h1>
      <ContactList />
    </>
  );
};

export default ContactsPage;
