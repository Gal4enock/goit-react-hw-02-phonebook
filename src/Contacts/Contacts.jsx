import React from 'react';

const Contacts = function ({contacts}) {
  console.log(contacts);
  return (<ul>
    {contacts.length ? contacts.map(contact => <li key={contact.id}>{contact.name}: { contact.number}</li>) : ''}
  </ul>)
}
export default Contacts;