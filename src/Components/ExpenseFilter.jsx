function ExpenseFilter({ filter, onFilterChange }) {
  return (
    <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
      <option>All</option>
      <option>Food</option>
      <option>Transport</option>
      <option>Bills</option>
      <option>Shopping</option>
      <option>Other</option>
    </select>
  );
}

export default ExpenseFilter;