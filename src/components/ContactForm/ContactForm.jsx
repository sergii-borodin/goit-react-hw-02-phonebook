import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ContactForm extends Component {

    state = {
      contactName: '',
      telNumber: '',
    }

    addName = (e) => {
    const newName = e.currentTarget.value;      
    this.setState({ contactName: newName })
    }
  
    addTelNumber = (e) => {
      const newTelNumber = e.currentTarget.value;
      this.setState({telNumber: newTelNumber})
    }
  
   onSubmit = (e) => {
    e.preventDefault();
     
     const isAlreadyInContactList = this.props.existedContacts.find(contact => contact.name.toLowerCase() === this.state.contactName.toLocaleLowerCase());
    
     isAlreadyInContactList ? alert('This contact is already existed') : this.props.onSubmit(this.state.contactName,
       this.state.telNumber);
     
     this.setState({
      contactName: '',
      telNumber: '',
    })
}

  render() {
    return (
      <form onSubmit={this.onSubmit}
        style={{
      display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <label>
          Name : 
       <input
  type="text"
  name="name"
  value={this.state.contactName}
  onChange={this.addName}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <label>
          Tel : <input
  type="tel"
          name="number"
          value={this.state.telNumber}
          onChange={this.addTelNumber}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </label>
        <button type="submit">Add Contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  existedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
}