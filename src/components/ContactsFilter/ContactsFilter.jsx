import React, { Component } from 'react';
import shortid from 'shortid';
import {fields} from '../FormAddContacts/fields';
import styles from './ContactsFilter.module.css';

class ContactsFilter extends Component {
    state = {
        name: ""
    }

    nameFilterInputId = shortid();

    handleChange = ({target})=> {
        const {name, value} = target
        this.setState({ [name]: value });
        const { handleChange } = this.props;
        handleChange({ value });
    }

    render() {
        const { name } = this.state;
        const { nameFilterInputId, handleChange } = this;
        return (
            <div className={styles.filterContainer}>
                <label htmlFor={nameFilterInputId} className={styles.nameInput}>Find contacts by name</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    type={fields.nameValue.type}
                    value={name}
                    name="name"
                    id={nameFilterInputId}
                    pattern={fields.nameValue.pattern}
                    title={fields.nameValue.title}
                    required />
                </div>
           );
   }

}

export default ContactsFilter;