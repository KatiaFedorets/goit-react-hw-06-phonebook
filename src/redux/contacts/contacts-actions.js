import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContact = data => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
