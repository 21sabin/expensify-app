import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE








store.subscribe(() => {
    const state=store.getState();
    console.log(state.filters)
    const viewExpenses=viewVisibleExpenses(state.expenses,state.filters);
    console.log(viewExpenses,"view expenses")
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 ,createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300,createdAt:3000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:200}))


store.dispatch(sortBy("amount"))
store.dispatch(setText("e"));
// store.dispatch(setText());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(sortByStartDate(0));
store.dispatch(sortByEndDate(4000))

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


// const user={
//     name:"abcd",
//     age:23
// };

// const updateUser={
//   name:"xyz"
// }


// console.log({
//   ...user,
//   ...updateUser
// })

