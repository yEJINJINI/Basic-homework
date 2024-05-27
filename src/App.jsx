import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    setCount(count + 1);
  };
  const minusHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <h1>Count: {count}</h1>
      <button className="plusBtn" onClick={plusHandler}>
        +
      </button>
      <button className="minusBtn" onClick={minusHandler}>
        -
      </button>
      <button className="resetBtn" onClick={resetHandler}>
        Reset
      </button>
    </Fragment>
  );
}

export default App;
