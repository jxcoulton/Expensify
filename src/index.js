import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";
import { addExpense } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filters";
import getVisibleExpenses from "./redux/selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//set up store availability to components through wrapper props
const jsx = (
  <Provider  store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
