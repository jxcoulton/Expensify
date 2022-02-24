import { createStore } from "redux";

//ACTION GENERATORS - describe the fact that something happened but dont specify how the application's state changes in response. the reducer does that

//destructured increment into the argument with a default of 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

//REDUCER - are pure functions (output determined by input) , never change state or action.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return {
        count: action.count,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

//FUNCTION CALLS

//sets up a listener for state change, added an option to stop listening
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 20 }));

//called to stop listening
unsubscribe();
