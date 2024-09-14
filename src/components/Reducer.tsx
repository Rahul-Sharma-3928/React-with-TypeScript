import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const initialState: StateType = {
  count: 0,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };

  const decrement = () => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  const css = {
    width: "50px",
    padding: "5px",
    margin: "10px",
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <h1 style={{ padding: "4px", margin: "6px" }}>Count: {state.count} </h1>
      <button style={css} onClick={increment}>
        +
      </button>
      <button style={css} onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Reducer;
