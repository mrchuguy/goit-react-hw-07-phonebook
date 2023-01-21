import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contactList = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contactList.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </List>
  );
};
