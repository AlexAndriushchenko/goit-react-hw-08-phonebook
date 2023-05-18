import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { List, ListItem, Text, Button } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <List spacing={1} marginLeft="40px" fontSize="18px" width="320px">
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
          marginLeft="-50px"
        >
          <Text marginTop="0" marginBottom="0" marginRight="10px">
            {name} {number}
          </Text>
          <Button
            colorScheme="blue"
            type="button"
            onClick={onDeleteContact.bind(this, id)}
            _hover={{ bg: 'rgba(255, 4, 4, 0.671)' }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
