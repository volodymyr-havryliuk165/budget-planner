import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { Context } from '../context/Context';

function Expenses() {
  const { expenses } = useContext(Context);
  return (
    <div className="expenses">
      <ul className="expenses__list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Expenses;
