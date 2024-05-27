import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    setCount(count + 1);
  };
  const minusHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Count: {count >= 0 ? count : setCount(0)}
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </div>
  );
}

export default App;

// import { useState } from "react";
// function App() {
//   const [isDark, setIsDark] = useState(false);
//   const changeMode = () => {
//     setIsDark(!isDark);
//   };
//   return (
//     <div>
//       {isDark ? "다크모드" : "화이트모드"}
//       <button onClick={changeMode}>change</button>
//     </div>
//   );
// }

// export default App;
