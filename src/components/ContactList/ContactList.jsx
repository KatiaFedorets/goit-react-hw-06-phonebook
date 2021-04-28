import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

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

ContactList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default ContactList;
