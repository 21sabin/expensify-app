import { removeExpense,addExpense,editExpense } from '../../actions/expenses';

test("should setup remove expense action object",()=>{
    const result=removeExpense({id:"123abc"});
    expect(result).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123abc"
    })
});

test("should setup edit expense action object",()=>{
    const result=editExpense("123",{"note":"edit expense"});
    expect(result).toEqual({
        type:"EDIT_EXPENSE",
        id:"123",
        updates:{
            "note":"edit expense"
        }
    })
});

test("should setup addexpenses action object",()=>{
    const expenseData={
        description:"rent expense",note:"The last month expense",amount:100,createdAt:100
    }
    const result=addExpense(expenseData);
    expect(result).toEqual({
        type:"ADD_EXPENSE",
       expense:{...expenseData,
        id:expect.any(String)
       }
    })
});

test("should setup addExpense action object with default values",()=>{
   
    const result=addExpense();
    expect(result).toEqual({
        type:"ADD_EXPENSE",
      expense:{ 
        amount:0,
       createdAt:0,
       description:"",
       id:expect.any(String),
       note:""
      }
    })
})