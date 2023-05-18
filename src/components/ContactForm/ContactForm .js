import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

import {
  Input,
  Button,
  Wrap,
  WrapItem,
  Center,
  FormLabel,
} from '@chakra-ui/react';

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
      toast.error(`${contactForAdd.name} is already in contacts.`);
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
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="300px">
          <form type="submit" onSubmit={handleSubmit}>
            <FormLabel htmlFor={nameInputId}>
              Name
              <Input
                id={nameInputId}
                type="text"
                name="name"
                placeholder="enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                ref={name}
              />
            </FormLabel>
            <FormLabel htmlFor={numberInputId}>
              Number
              <Input
                id={numberInputId}
                type="tel"
                name="number"
                placeholder="enter number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                ref={number}
              />
            </FormLabel>
            <Button colorScheme="blue" type="submit">
              Add contact
            </Button>
          </form>
        </Center>
      </WrapItem>
    </Wrap>
  );
};
