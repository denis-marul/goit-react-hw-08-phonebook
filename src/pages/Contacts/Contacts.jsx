import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.container}>
      <Section title={'Phonebook'}>
        <Form />
      </Section>

      {contacts.length > 0 ? (
        <Section title={'Contacts'}>
          <Filter />
          <ContactsList />
        </Section>
      ) : (
        <p>You have no contacts yet.</p>
      )}
    </div>
  );
};

export default Contacts;
