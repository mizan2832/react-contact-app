import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {
    const rendercontact = props.contacts.map((contact)=>{
        return (
           <ContactCard contact={contact} />
        );
    });
    return (
        <div className='ui celled list'>
            {rendercontact}
        </div>
    );
}

export default ContactList
