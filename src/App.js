import './App.css';
import Header from './components/Header';
import BudgetTracker from './components/BudgetTracker';
import Expenses from './components/Expenses';
import NewExpenseForm from './components/NewExpenseForm';
import { Provider } from './context/Context';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <BudgetTracker />
        <h2>Expenses</h2>
        <Expenses />
        <h2>Add expense</h2>
        <NewExpenseForm />
      </div>
    </Provider>
  );
}

export default App;
