import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import  getVisibleExpenses  from "./selectors/expenses";
import './firebase/firebase'
import './components/promise'

import configureStore from './stores/configureStore';
const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill',amount:4500,createdAt:3000}));
store.dispatch(addExpense({ description: 'Gas bill',amount:200,createdAt:100 }));
store.dispatch(addExpense({ description: 'Telephone bill',amount:200,createdAt:5000 }));
// store.dispatch(setText('water')); 
store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// store.dispatch(setText("water"));



const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );



ReactDOM.render(jsx, document.getElementById('app'));
