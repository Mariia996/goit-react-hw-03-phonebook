import React from 'react';
import styles from './PhonebookItems.module.css';

const PhonebookItems = ({ name, number, onDelete }) => {
    return (<div className={styles.contactItem}>
        <li>{name}: {number}</li>
        <button onClick={onDelete} className={styles.btn}>Delete</button>
    </div>)
}

export default PhonebookItems;