import React,{ Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
  }
  
  addContact = (name, telNumber) => {
    const id = nanoid();
    console.log('id', id);
    this.setState((prevState) => {
      return {contacts:
        [{id: nanoid(), name: `${name}`, number: `${telNumber}`}, ...prevState.contacts]
      }
    })
  }

  render()
{
return (
    <div
    style={{
        height: '100vh',
      display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
  >
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.addContact} />
    <h2>Contacts</h2>
    <ContactList contacts={ this.state.contacts} />
    </div>
  );
    }
  
};
