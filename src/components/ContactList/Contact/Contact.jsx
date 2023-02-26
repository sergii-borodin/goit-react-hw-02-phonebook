import React from 'react'
// import PropTypes from 'prop-types'

const Contact = ({contact}) => {
  return (
    <><p>{contact.name}</p>
        <p>{contact.number}</p></>
  )
}

// Contact.propTypes = {}

export default Contact