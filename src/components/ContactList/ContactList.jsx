import React from 'react';
import PhonebookItems from '../PhonebookItems/PhonebookItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {

    const contactElements = contacts.map(({ id, ...props }, idx) => {
       props = {
            ...props,
            onDelete: ()=>deleteContacts(idx),
        }
        return <PhonebookItems key={id} {...props} />
    })
         return ( <ul className={styles.contactList}>
                {contactElements}
            </ul> );
}

export default ContactList;
