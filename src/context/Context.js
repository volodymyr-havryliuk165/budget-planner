import { createContext, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_EXPENSE': 
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };;
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload),
      }
    case 'BUDGET':
      return {
        ...state,
        budget: action.payload
      }
    default:
      return state;
  }
};

const initialState = JSON.parse(localStorage.getItem('state')) || {
  budget: 150000,
  expenses: [
    { id: 1, name: 'Shopping', cost: 2500 },
    { id: 2, name: 'Fuel', cost: 1000 },
    { id: 3, name: 'Bayraktar donations', cost: 5000 },
    { id: 4, name: 'Taxes', cost: 1000 },
  ],
};

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
