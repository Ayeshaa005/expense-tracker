function ExpenseSummary({ total, count }) {
  return (
    <div>
      <h2>Total: {total}</h2>
      <p>Expenses: {count}</p>
    </div>
  );
}

export default ExpenseSummary;