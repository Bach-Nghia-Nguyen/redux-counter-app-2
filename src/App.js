import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./store/index";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
