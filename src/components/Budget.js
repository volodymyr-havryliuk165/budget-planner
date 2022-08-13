import React, { useContext } from 'react'
import BudgetItem from './BudgetItem'
import { Context } from '../context/Context'

function Budget() {
  const { budget } = useContext(Context);
  return (
      <BudgetItem bg='success' editable='true'>
        Budget: {budget}₴
      </BudgetItem>
    )
}

export default Budget