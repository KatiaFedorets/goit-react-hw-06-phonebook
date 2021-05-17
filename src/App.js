import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div className={styles.div}>
        <h2>Phonebook</h2>
        <ContactForm />

        <Filter>
          <h2>Contact</h2>
        </Filter>

        <ContactList />
      </div>
    );
  }
}

export default App;
