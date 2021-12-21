import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

const contact = [
  {
    id:1,
    name:'Mizanur rahman',
    email:'m@gmail.com'
  },
  {
    id:2,
    name:'Mitu',
    email:'mitu@gmail.com'
  }
];

function App() {
  const [contact, setContacts]= useState([]);
  return (
    <div className="ui container">
       <Header/>
       <AddContact/>
       <ContactList contacts={contact} />
    </div>
  );
}

export default App;
