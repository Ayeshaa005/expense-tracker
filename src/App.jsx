import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  };

  function deleteExpense(id) {
  setExpenses(expenses.filter((expense) => expense.id !== id));
  

};

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <h2>Total: {total}</h2>
      <ExpenseForm onAddExpense={addExpense} />
      {expenses.length === 0 ? (
  <p>No expenses yet</p>
) : (
  <ul>
    {expenses.map((expense) => (
      <li key={expense.id}>
        {expense.title} - {expense.amount} - {expense.category} -{" "}
        {expense.date}
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </li>
    ))}
  </ul>
)}
      <p>Expenses: {expenses.length}</p>
    </div>
  );
}

export default App;