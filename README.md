# Expense Tracker

A personal expense tracker built with React (Vite) and plain CSS. No UI library, all components are built from scratch.

**Live demo:** https://expense-tracker-hq.vercel.app

## Features

- Add an expense with title, amount, category (Food, Transport, Bills, Shopping, Other) and date
- Form validation: the title cannot be empty and the amount must be greater than 0
- List of all expenses, newest first
- Delete an expense
- Edit an existing expense
- Total spent at the top, which updates with the category filter
- Filter the list by category
- Total per category
- Empty state ("No expenses yet")
- Data saved in localStorage, so it stays after a page refresh
- Responsive layout that works on mobile

## Tech stack

- React (Vite)
- Plain CSS
- localStorage for saving data

## How to run

1. Clone the repository

   ```
   git clone https://github.com/Ayeshaa005/expense-tracker.git
   cd expense-tracker
   ```

2. Install the packages

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Open the link shown in the terminal (usually http://localhost:5173)

To make a production build, run `npm run build`.

## Project structure

```
src/
  App.jsx                    state and main logic
  index.css                  all styles
  Components/
    ExpenseForm.jsx          add and edit form with validation
    ExpenseFilter.jsx        category dropdown
    ExpenseSummary.jsx       total, count and category totals
    ExpenseList.jsx          list and empty state
    ExpenseItem.jsx          one expense row
```