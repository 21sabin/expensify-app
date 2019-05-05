// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      console.log(action,"remove expense")
      return state.filter(({id})=>id!==action.id);
    case "EDIT_EXPENSE":
    console.log(state,action.updates,"edit expense reducre")
      return state.map((expense)=>{
          if(expense.id===action.id){
              return {
                ...expense,
                ...action.updates
              }
          }else{
            return expense;
          }
      })
    default:
      return state;
  }
};