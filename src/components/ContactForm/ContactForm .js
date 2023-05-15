import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const name = useRef();
  const number = useRef();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactForAdd = {
      name: name.current.value,
      phone: number.current.value,
    };

    if (isInPhoneBook(contactForAdd.name)) {
      window.alert(`${contactForAdd.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contactForAdd));

    reset();
  };

  function isInPhoneBook(name) {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  }

  const reset = () => {
    name.current.value = '';
    number.current.value = '';
  };

  return (
    <div className={css.phonebook_form}>
      <form type="submit" onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.phonebook_label}>
          Name
          <input
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            ref={name}
          />
        </label>
        <label htmlFor={numberInputId} className={css.phonebook_label}>
          Number
          <input
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            ref={number}
          />
        </label>
        <button type="submit" className={css.phonebook_btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
