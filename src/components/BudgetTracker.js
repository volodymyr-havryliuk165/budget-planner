import React from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import Spent from './Spent';

function BudgetTracker() {
  return (
    <div className="budget-container">
      <Budget />
      <Remaining />
      <Spent />
    </div>
  );
}

export default BudgetTracker;
