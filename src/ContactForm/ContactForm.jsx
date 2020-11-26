import React from 'react';
import style from './ContactForm.module.css'

const ContactForm = function ({onSubmit, value, onChange, number}) {
  return (
  <form onSubmit={onSubmit}>
    <label className={style.lable}>
      Name
      <input className={style.input} name="name" type="text" value={value} onChange={onChange} />
    </label>
      <label className={style.lable}>
      Number
      <input className={style.input} name="number" type="phone" value={number} onChange={onChange} />
      <button type="submit">Add contact</button>
    </label>
  </form>
  )
}
export default ContactForm;