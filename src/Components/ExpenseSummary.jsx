function ExpenseSummary({ total, count }) {
  return (
    <div className="summary">
      <div className="stat">
        <p>Total spent</p>
        <h3>{total.toLocaleString()}</h3>
      </div>
      <div className="stat">
        <p>Expenses</p>
        <h3>{count}</h3>
      </div>
    </div>
  );
}

export default ExpenseSummary;