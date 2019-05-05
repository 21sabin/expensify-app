import React from 'react';
import ExpenseList from './ExpensesList';
import  ExpenseListFilter  from './ExpenseListFilter'

const ExpenseDashboardPage = () => (
    <div>
      This is from my dashboard component
      <ExpenseListFilter />
      <ExpenseList />
      </div>

  );

  export default ExpenseDashboardPage;