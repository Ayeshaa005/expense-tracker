import { useState, useEffect } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseSummary from "./Components/ExpenseSummary";

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

      <ExpenseSummary total={total} count={filteredExpenses.length} />

      <ExpenseFilter filter={filter} onFilterChange={setFilter} />

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;