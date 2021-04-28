import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";

import "normalize.css";

class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts
      });
    }
  }

  deleteContacts = contactsId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactsId)
    }));
  };

  addContacts = data => {
    const searchSameName = this.state.contacts
      .map(cont => cont.name)
      .includes(data.name);
    if (searchSameName) {
      alert(`${data.name} is already in contacts`);
    } else if (data.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        id: uuidv4(),
        name: data.name,
        number: data.number
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }));
    }
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleUpperCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleUpperCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={styles.div}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContacts} />

        {contacts.length > 0 && (
          <Filter value={filter} onChange={this.changeFilter}>
            <h2>Contact</h2>
          </Filter>
        )}
        <ContactList
          contacts={visibleContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
