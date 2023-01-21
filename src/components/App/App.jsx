import { ContactForm } from 'components/ContactForm/ContactForm';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contactList = useSelector(getContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contactList.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <GlobalStyle />
    </div>
  );
};
