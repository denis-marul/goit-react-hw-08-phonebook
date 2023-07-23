import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={css.container}>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};

export default Contacts;
