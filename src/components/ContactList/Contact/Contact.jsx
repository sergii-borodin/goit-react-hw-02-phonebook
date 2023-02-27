import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({contact, children}) => {
  return (
    <>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        {children}
    </>
  )
}

Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
 }

export default Contact