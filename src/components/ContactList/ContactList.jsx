import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterContact } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilterContact);
  const dispatch = useDispatch();
  return (
    <List>
      {contactList
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
    </List>
  );
};
