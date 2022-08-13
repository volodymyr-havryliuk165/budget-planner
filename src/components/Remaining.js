import React, { useContext } from 'react';
import BudgetItem from './BudgetItem';
import { Context } from '../context/Context';

function Remaining() {
  const { expenses, budget } = useContext(Context);

  function calculateRemaining() {
    const sum = expenses.reduce((total, current) => {
      return total + current.cost;
    }, 0);
    return budget - sum;
  }

  return <BudgetItem bg="info">Remaining: {calculateRemaining()}₴</BudgetItem>;
}

export default Remaining;
