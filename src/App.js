import { useState, useEffect } from "react";
import s from "./App.module.css";
import ContactForm from "./components/Form/form";
import ContactList from "./components/List/list";
import Filter from "./components/Filter/filter";

function App()  {
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  })

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

 
  const formSubmit = (obj) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === obj.name.toLowerCase()
      )
    ) {
      return alert("This contact has already been added to the list");
    }

    setContacts([obj, ...contacts]);
  };

  const handleContacts = () => {
    const onContactsFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(onContactsFilter)
    );
  };

  const getContacts = handleContacts();

  const filterChange = (evt) => {
    setFilter(evt.target.value);
  };

  const deleteContact = (contactId) => {
   setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
      <div className={s.App}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm formSubmit={formSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter filter={filter} onFilterChange={filterChange} />
        <ContactList getContacts={getContacts} deleteContact={deleteContact} />
      </div>
    );
}

export default App;
