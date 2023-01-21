import { useState } from 'react';
import { Form, Input, InputWrap, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, phone };

    contactList.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));

    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
        <Label>Name</Label>
      </InputWrap>
      <InputWrap>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChange}
          required
        />
        <Label>Number</Label>
      </InputWrap>
      <InputWrap>
        <Input type="submit" value="Add contact" />
      </InputWrap>
    </Form>
  );
};
