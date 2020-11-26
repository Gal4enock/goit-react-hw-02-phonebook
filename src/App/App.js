import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../FilterContacts/FilterContacts'
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
      {
        contacts: [...this.state.contacts, { name: this.state.name, id: uuidv4(), number: this.state.number }],
        name: '',
        number: ''
      }
    )
  }
  handleDelete = nameId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== nameId)
      }
    })
  }
  changeFilter = (filter) => {
    this.setState({filter})
  }
    handleFilter = () => {
      const { contacts, filter } = this.state;
      return (contacts.filter((contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )))
      
    }
    
  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
       <ContactForm onSubmit={this.handleSubmit} value={name} number={number} onChange={this.handleChange}/>
        <h2>Contacts</h2>
        <Filter value={filter} toFilter={this.changeFilter} />
        <Contacts contacts={this.handleFilter()} onDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;
