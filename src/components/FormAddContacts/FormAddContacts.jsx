import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {fields} from "./fields";
import styles from './FormAddContacts.module.css';

class FormAddContacts extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = ({ target }) => {
    const {name, value} = target
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, number} = this.state;
        const { onSubmit } = this.props;
        onSubmit({name, number});

        this.reset();
    }

    reset = () => {
        this.setState({
            name: '', number: ''
        });
    }

    render() {
        const { name, number} = this.state;
        const { onSubmit, handleChange, nameInputId, numberInputId } = this;

        return (<form className={styles.formField} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={nameInputId} className={styles.nameInput}>Name</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    type={fields.nameValue.type}
                    value={name}
                    name="name"
                    id={nameInputId}
                    pattern={fields.nameValue.pattern}
                    title={fields.nameValue.title}
                    required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={numberInputId} className={styles.nameInput}>Number</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    id={numberInputId}
                    type={fields.numberValue.type}
                    value={number}
                    name="number"
                    pattern={fields.numberValue.pattern}
                    title={fields.numberValue.title}
                    required />
            </div>
            <button type="submit" className={styles.btn}>Add contact</button>
        </form> )
    }
}

export default FormAddContacts;