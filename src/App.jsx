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
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([expense, ...expenses]);
  }

  function updateExpense(updated) {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updated.id ? updated : expense
      )
    );
    setEditingExpense(null);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    if (editingExpense && editingExpense.id === id) {
      setEditingExpense(null);
    }
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

      <div className="layout">
        <section className="card">
          <h2>{editingExpense ? "Edit expense" : "Add expense"}</h2>
          <ExpenseForm
            onAddExpense={addExpense}
            onUpdateExpense={updateExpense}
            editingExpense={editingExpense}
            onCancelEdit={() => setEditingExpense(null)}
          />
        </section>

        <section className="card">
          <div className="list-head">
            <h2>Expenses</h2>
            <ExpenseFilter filter={filter} onFilterChange={setFilter} />
          </div>
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
            onEdit={setEditingExpense}
          />
        </section>
      </div>
    </div>
  );
}

export default App;