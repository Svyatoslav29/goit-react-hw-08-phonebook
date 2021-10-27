import s from "./form.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function ContactForm({formSubmit}) {
 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameId = uuidv4();
  const numberId = uuidv4();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contact = { id: uuidv4(), name, number };
    formSubmit(contact);
    resetForm();
  };

  const inputChange = (evt) => {
    switch(evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'number':
        setNumber(evt.target.value);
        break;
        
      default:
        return;  
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
      <div className={s.formWrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nameId}>
            Name
            <input
              id={nameId}
              className={s.input}
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={inputChange}
            />
          </label>

          <label className={s.label} htmlFor={numberId}>
            Number
            <input
              id={numberId}
              className={s.input}
              type="tel"
              value={number}
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={inputChange}
            />
          </label>
          <button className={s.button}>Add contact</button>
        </form>
      </div>
    );
  }


ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,

  nameId: PropTypes.number,
  numberId: PropTypes.number,

  handleSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
  inputChange: PropTypes.func,
};

export default ContactForm;