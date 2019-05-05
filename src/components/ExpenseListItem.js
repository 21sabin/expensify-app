// import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
// import { Link } from 'react-router-dom';

// const ExpenseListItem=({dispatch,id,description,createdAt,amount,note})=>(
   
//     <div>
//     <Link to={`/edit/${id}`}>
//      <h1>{description}</h1>
//     </Link>
//         <p>{amount}</p>
//         <button type="button" onClick={()=>{
//            dispatch(removeExpense({id}))
//         }}>Remove</button>
//     </div>
// );
// export default connect()(ExpenseListItem)

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;

