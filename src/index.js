import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import todosReducer from "./hooks/TodoReducer";
import TodoAction from "./hooks/TodoAction";

import "./styles.css";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    console.log(todos);
  });

  function submitTodoItem(value) {
    dispatch({
      type: TodoAction.ADD,
      text: value
    });
  }

  function onCompleted(todo) {
    dispatch({
      type: TodoAction.COMPLETED,
      todos: todos,
      completedUuid: todo.uuid
    });
  }

  return (
    <div>
      <TodoInput onAdd={submitTodoItem} />
      <TodoList todos={todos} onCompleted={onCompleted} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
