import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';
import { Container } from 'react-bootstrap';
const ContactList = ({Contacts, deleteHandler}) => {
    return (
        <Container fluid className='mycontainer'>
            <h3>در خواست ها</h3>
        {Contacts.length ? (<ul className='contacts'>
                {Contacts.map(Contact =>  
                        <ContactItem key={Contact.id} data={Contact} deleteHandler={deleteHandler}/>
                    )}
            </ul>) : (
            <p className='massage'>no contacts yet!!!</p>)}
        </Container>

    );
};

export default ContactList;