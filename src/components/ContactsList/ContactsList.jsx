import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visiableContacts =
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

  return (
    <ul className={css.contactsList}>
      {visiableContacts &&
        visiableContacts.map(({ name, number, id }) => (
          <li className={css.contactItem} key={id}>
            <p>{name}</p> <p>{number}</p>
            <button
              className={css.contactBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactsList.protoTypes = {
  visiableContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
