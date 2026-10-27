import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  const filteredExpenses = expenses.filter(
    (expense) => filter === "All" || expense.category === filter
  );

  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <h2>Total: {total}</h2>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      <ExpenseForm onAddExpense={addExpense} />

      {filteredExpenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - {expense.amount} - {expense.category} -{" "}
              {expense.date}
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <p>Expenses: {filteredExpenses.length}</p>
    </div>
  );
}

export default App;