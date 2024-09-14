import { useState } from "react";
import Box from "./components/Box";
import Generics from "./components/Generics";
import Other from "./components/Other";
import ContextPage from "./components/ContextPage";
import Reducer from "./components/Reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValuePlus,
  decrementByValueMins,
  StateType,
} from "./redux/createSlicePage";

function App() {
  const [val, setVal] = useState<string>("");
  const [data, setData] = useState<number>(0);

  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);

  const incrementByValueHandler = () => {
    setData(0);
    dispatch(incrementByValuePlus(data));
  };
  const decrementByValueHandler = () => {
    setData(0);
    dispatch(decrementByValueMins(data));
  };
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const css = { width: "40px", margin: "5px" };

  return (
    <>
      <h3>hello typeScript</h3>
      <h2>
        <Box
          heading={"what your name"}
          count={55}
          getFun={() => {
            console.log("tell me about yourself");
          }}
        />
      </h2>
      <div>
        <Generics label="Search" value={val} setFun={setVal} />
      </div>
      <div>
        <Other />
        <ContextPage />
      </div>
      <div style={{ backgroundColor: "darkcyan" }}>
        <div style={{ margin: "10px", padding: "10px" }}>
          <h2>Redux ToolKit</h2>
          <h3>Count: {count}</h3>
          <button style={css} onClick={incrementHandler}>
            +
          </button>
          <button style={css} onClick={decrementHandler}>
            -
          </button>
          <input
            type="number"
            placeholder="enter only number"
            value={data}
            onChange={(e) => setData(Number(e.target.value))}
          />
          <button
            style={css}
            disabled={data < 0}
            onClick={incrementByValueHandler}
          >
            Add
          </button>
          <button disabled={data < 0} onClick={decrementByValueHandler}>
            remove
          </button>
        </div>
        <Reducer />
      </div>
    </>
  );
}

export default App;
