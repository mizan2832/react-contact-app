import React, {useState,useEffect} from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

const contacts = [
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
  const [contacts, setContacts]= useState([]);
  const LOCAL_STRORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts,{id:uuid(),...contacts}]);

  }

  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY));
    if (retriveContact) {
      setContacts(retriveContact);
    }

  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STRORAGE_KEY,JSON.stringify(contacts));


  }, [contacts])

  return (
    <div className="ui container">
       <Header/>
       <AddContact addContactHandler={addContactHandler}/>
       <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
