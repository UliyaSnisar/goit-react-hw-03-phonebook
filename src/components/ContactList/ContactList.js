import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ addedContacts, onDeleteContact }) => (
  <ul className={styles.container}>
    {addedContacts.map(({ name, id, number }) => (
      <li key={id} className={styles.item}>
        <p>
          {name} : {number}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.prototype = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
