import s from "./App.module.css";
import ContactForm from "./components/Form/form";
import ContactList from "./components/List/list";
import Filter from "./components/Filter/filter";

function App()  {
  return (
      <div className={s.App}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={s.title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
}

export default App;
