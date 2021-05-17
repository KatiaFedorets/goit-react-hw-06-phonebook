import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={styles.list_item}>
        <span>{contact.name}: </span>
        <span>{contact.number}</span>
        <button
          type="button"
          onClick={() => onDeleteContacts(contact.id)}
          className={styles.list_button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const lowerCaseFilter = filter.toLowerCase();
  return {
    contacts: items.filter(item => {
      return item.name.toLowerCase().includes(lowerCaseFilter);
    }),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: text => dispatch(contactsActions.deleteContact(text)),
});

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
