import React from 'react';
import { ExpenseForm } from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses' 

const EditExpensePage = (props) => {
console.log(props.expense,"edit page")
  return (
    <div>
      Editing the expense {props.match.params.id}
      <ExpenseForm expense={props.expense}
        onSubmit={(expense)=>{
         props.dispatch(editExpense(props.expense.id,expense));
         props.history.push('/')
        }}
      />
    </div>
  );
};

const mapStateToProp=(state,props)=>{
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProp)(EditExpensePage) ;
