import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { Context } from '../context/Context'

function ExpenseItem({ name, cost, id }) {
  const { dispatch } = useContext(Context);

  function deleteExpense() {
    dispatch({ type: 'DELETE_EXPENSE', payload: id })
  }

  return (
    <li className="expenses__item">
      <span className="expenses__name">{name}</span>
      <div className="flex-container">
        <span className="expenses__cost">{cost}₴</span>
        <TiDelete className="expenses__delete" onClick={deleteExpense}/>
      </div>
    </li>
  )
}

export default ExpenseItem