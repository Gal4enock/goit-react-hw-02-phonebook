import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      { contacts: [...this.state.contacts, { name: this.state.name, id: uuidv4(), number: this.state.number }] }
    )
  }
    handleFinde = (e) => {
      const { value } = e.target;
      this.setState(
         {contacts: [this.state.contacts.find(contact => contact === value)]}
      )}
    
  render() {
    const { name, number } = this.state;
    return (
      <div>
       <ContactForm onSubmit={this.handleSubmit} value={name} number={number} onChange={this.handleChange}/>
        <h2>Contacts</h2>
        <input onChange={this.handleFinde} type="text"/>
        <Contacts contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
