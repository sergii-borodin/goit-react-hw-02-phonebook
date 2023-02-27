import React,{ Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { MainContainer } from "./App.styled";

import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  addContact = (name, telNumber) => {
    this.setState((prevState) => {
      return {contacts:
        [{id: nanoid(), name: `${name}`, number: `${telNumber}`}, ...prevState.contacts]
      }
    })
  }

  deleteContactById = (id) => {
    const updatedContactList = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({contacts: updatedContactList})
  }

  addFilter = (e) => {
    const searchWord = e.currentTarget.value.toLowerCase();
    this.setState({ filter: searchWord });
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    
    return filtredContacts;
  }
  
  render()
  {
    const filtredContacts = this.filterContacts();
return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact} existedContacts={this.state.contacts} />
      <h2>Contacts</h2>
      <Filter searchByName={this.addFilter} searchWord={this.state.filter} />
      <ContactList contacts={filtredContacts} deleteContactById={this.deleteContactById} />
    </MainContainer>
  );
    }
  
};
