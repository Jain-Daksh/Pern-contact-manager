import React from 'react';
import './App.css';
//import header from '../components/header';

import  Header from './header';
import AddContact from './addContact'
import ContactList from './contactList'

function App() {

  const contacts = [
    {
      id : "1",
      name : "new",
      email : "new@new.com"
    },
    {
      id : "2",
      name : "old"
    }
  ]
  return (
    <div className='ui container'>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts= {contacts}></ContactList>
    </div>
  );
}

export default App;
//