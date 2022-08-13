import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';

function BudgetItem({ children, bg, editable }) {
  const { dispatch } = useContext(Context);

  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState('');

  function handleClick() {
    if(!editing) {
      setEditing(true);
    } else {
      handleInput(input) && dispatch({
        type: 'BUDGET',
        payload: input,
      })
      setEditing(false);
      setInput('');
    }
  }

  function handleInput(input) {
    if(input === '' || isNaN(input) ) {
      return false;
    }
    return true;
  }

  return (
    <div className={`budget-item bg-${bg}`}>
      {!editing && <span className="budget-item__text">{children}</span>}
      {editing && <input type="text" className="budget-item__input" value={input} onChange={(e) => setInput(e.target.value)} />}
      {editable && (
        <button onClick={handleClick} className="budget-item__edit">
          {editing ? 'save' : 'edit'}
        </button>
      )}
    </div>
  );
}

export default BudgetItem;
