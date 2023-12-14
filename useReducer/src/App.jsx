import { useReducer } from "react";
import "./App.css";

function reducer(stateIncrease, action) {
  if (action.type === "increment") {
    return {
      value: stateIncrease.value + 1,
    };
  } else {
    return {
      value: stateIncrease.value,
    };
  }
}

function App() {
  const [stateIncrease, dispach] = useReducer(reducer, { value: 0 });
  return (
    <>
      <h1>Welcome to the useReducer Hook</h1>
      <h4>let's do the state management without using useState hook</h4>
      <h3>Increment the value : {stateIncrease.value}</h3>
      <button
        onClick={() => {
          dispach({ type: "increment" });
        }}
      >
        Click me
      </button>
    </>
  );
}

export default App;
