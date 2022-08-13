import React, { useContext } from 'react'
import BudgetItem from './BudgetItem'
import { Context } from '../context/Context'

function Spent() {
  const { expenses, budget } = useContext(Context);

  const dangerLevel = () => {
    const spent = calculateSum();
    if (spent >= budget * 0.75) {
      return 'danger-800';
    }
    if (spent >= budget * 0.5) {
      return 'danger-400';
    }
    return 'danger';
  }

  function calculateSum() {
    return expenses.reduce((sum, current) => {
      return sum + current.cost;
    }, 0);
  }
  return (
    <BudgetItem bg={dangerLevel()}>
      Spent: {calculateSum()}₴
    </BudgetItem>
  )
}

export default Spent