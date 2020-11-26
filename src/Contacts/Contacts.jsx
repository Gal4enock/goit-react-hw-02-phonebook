import React from 'react';

const Contacts = function ({contacts, onDelete}) {
  console.log(contacts);
  return (<ul>
    {contacts.length ? contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number} <button onClick={ () => onDelete(contact.id)} type='button'>Delete</button> </li>) : ''}
  </ul>)
}
export default Contacts;