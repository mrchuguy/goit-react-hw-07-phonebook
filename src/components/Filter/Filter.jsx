import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilterContact } from 'redux/selectors';
import { Input, Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContact);

  function handleUpdate(evt) {
    const query = evt.target.value;
    dispatch(filterContacts(query));
  }

  return (
    <>
      <Title>Find contacts by name</Title>
      <Input value={filter} type="text" onChange={handleUpdate} />
    </>
  );
};
