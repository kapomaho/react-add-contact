import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
		super(props);
		this.addContact = this.addContact.bind(this);
	}
  state={
    contacts:[{
        name:'Mehmet',
        phone:'1312321'
    },
    {
        name:'Kapo',
        phone:'5336993600'
    }
    ]

};
addContact(contact)
{
    const {contacts} = this.state;
    contacts.push(contact);

  this.setState({
    contacts:contacts
  })
 // console.log(contact);
}
  render() {
    return (
      
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
