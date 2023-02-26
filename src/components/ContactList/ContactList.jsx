import React from 'react'
import Contact from './Contact/Contact'
// import PropTypes from 'prop-types'

const ContactList = ({contacts}) => {
  return (
    <ul>
      {contacts.map(contact => <li key={contact.id}>
        <Contact contact={ contact} />
      </li>)}
    </ul>
  )
}

// ContactList.propTypes = {}

export default ContactList