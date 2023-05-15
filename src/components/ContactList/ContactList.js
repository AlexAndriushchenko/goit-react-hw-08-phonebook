import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div>
      <ul className={css.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact_item}>
            <p className={css.contact_text}>
              {name} {number}
            </p>
            <button
              className={css.contact_delbtn}
              type="button"
              onClick={onDeleteContact.bind(this, id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
