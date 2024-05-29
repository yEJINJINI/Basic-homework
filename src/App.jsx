import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "잠자기",
      isDone: true,
    },
    {
      id: 2,
      text: "일찍 일어나기",
      isDone: false,
    },
  ]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("할 일을 입력해주세요");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      text: input,
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isDoneChangeHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="할 일을 추가하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => isDoneChangeHandler(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteHandler(todo.id)}>삭제</button>
          </li>
        ))}
        {/* <li style={{ textDecoration: "line-through" }}>
          잠자기
          <button>취소</button>
          <button>삭제</button>
        </li>
        <li>
          일찍 일어나기
          <button>완료</button>
          <button>삭제</button>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
