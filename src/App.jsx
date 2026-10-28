import { useState, useEffect } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

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

      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />

      <p>Expenses: {filteredExpenses.length}</p>
    </div>
  );
}

export default App;