import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoAction from "./hooks/TodoAction";
import todosReducer from "./hooks/TodoReducer";
import "./styles.css";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    console.log(todos);
  });

  function handleSubmit(value) {
    if (editId) {
      dispatch({
        type: TodoAction.EDIT,
        text: value,
        uuid: editId
      });
    } else {
      dispatch({
        type: TodoAction.CREATE,
        text: value
      });
    }
  }

  function handleComplete(todo) {
    dispatch({
      type: TodoAction.COMPLETED,
      uuid: todo.uuid
    });
  }

  function handleDelete(todo) {
    dispatch({
      type: TodoAction.DEL,
      uuid: todo.uuid
    });
  }

  function handleEdit(todo) {
    setText(todo.text);
    setEditId(todo.uuid);
  }

  function submitText() {
    handleSubmit(text);
    setText("");
    setEditId(null);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  function cancelText() {
    setText("");
    setEditId(null);
  }

  return (
    <div>
      <TodoInput
        value={text}
        onSubmit={submitText}
        onChange={changeText}
        onCancel={cancelText}
      />
      <TodoList
        todos={todos}
        onCompleted={handleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
