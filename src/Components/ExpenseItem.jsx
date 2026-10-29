function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <li className="row">
      <span className={`badge badge-${expense.category.toLowerCase()}`}>
        {expense.category}
      </span>

      <div className="row-main">
        <p className="row-title">{expense.title}</p>
        <small className="row-date">{expense.date || "No date"}</small>
      </div>

      <span className="row-amount">{expense.amount.toLocaleString()}</span>

      <div className="row-actions">
        <button
          className="icon-btn edit-btn"
          onClick={() => onEdit(expense)}
          aria-label="Edit expense"
          title="Edit"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </button>

        <button
          className="icon-btn delete-btn"
          onClick={() => onDelete(expense.id)}
          aria-label="Delete expense"
          title="Delete"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;