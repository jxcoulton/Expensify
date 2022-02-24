import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import SelectExpenses from "../redux/selectors/expenses"

//created HOC connecting redux store to components
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
  </div>
);

const mapStateToProps = (state) => { //connects the component to the store
  return {
    expenses: SelectExpenses(state.expenses, state.filters)
  }
}


export default connect(mapStateToProps)(ExpenseList); //export the connection

//when the store changes the component rerenders