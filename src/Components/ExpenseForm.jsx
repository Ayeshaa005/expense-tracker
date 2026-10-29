import { useState, useEffect } from "react";

function ExpenseForm({
  onAddExpense,
  onUpdateExpense,
  editingExpense,
  onCancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(String(editingExpense.amount));
      setCategory(editingExpense.category);
      setDate(editingExpense.date || "");
      setErrors({});
    }
  }, [editingExpense]);

  function resetForm() {
    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading

    const newErrors = {};

    if (title.trim() === "") {
      newErrors.title = "Title is required";
    }

    if (Number(amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const expenseData = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date,
    };

    if (editingExpense) {
      onUpdateExpense(expenseData);
    } else {
      onAddExpense(expenseData);
    }

    resetForm();
  }

  function handleCancel() {
    resetForm();
    onCancelEdit();
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Expense Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>

      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {errors.amount && <p className="error">{errors.amount}</p>}
      </div>

      <div className="field">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transport</option>
          <option>Bills</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      </div>

      <div className="field">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit">
        {editingExpense ? "Save changes" : "Add Expense"}
      </button>

      {editingExpense && (
        <button
          type="button"
          className="secondary-btn"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ExpenseForm;