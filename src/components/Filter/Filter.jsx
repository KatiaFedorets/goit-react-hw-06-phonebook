import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange, children }) => {
  return (
    <div className={styles.div}>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={styles.input}
        ></input>
      </label>
      {children}
    </div>
  );
};
const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
