import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { v4 as uuidv4 } from 'uuid';

function NewExpenseForm() {
  const { dispatch } = useContext(Context);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  function clearInputs() {
    setName('');
    setCost('');
  } 
  function onSubmit(e) {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: +cost,
    };

    clearInputs();

    dispatch({
      type: 'NEW_EXPENSE',
      payload: expense,
    })
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__column">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required="required"
          className="form__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form__column">
        <label htmlFor="name">Cost</label>
        <input
          type="text"
          id="cost"
          required="required"
          className="form__input"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" className='form__submit' />
    </form>
  );
}

export default NewExpenseForm;
