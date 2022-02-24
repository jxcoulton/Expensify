import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../redux/actions/expenses";

const Editpage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const id = window.location.pathname.replace("/edit/", "");
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === id;
    }),
  };
};

export default connect(mapStateToProps)(Editpage);
