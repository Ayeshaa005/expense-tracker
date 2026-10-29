const CATEGORIES = ["Food", "Transport", "Bills", "Shopping", "Other"];

function ExpenseSummary({ total, count, expenses }) {
  const categoryTotals = CATEGORIES.map((category) => ({
    category,
    sum: expenses
      .filter((expense) => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0),
  }));

  return (
    <>
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

      <div className="cat-chips">
        {categoryTotals.map(({ category, sum }) => (
          <div key={category} className="cat-chip">
            <span className={`dot dot-${category.toLowerCase()}`} />
            <span className="cat-name">{category}</span>
            <span className="cat-sum">{sum.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExpenseSummary;