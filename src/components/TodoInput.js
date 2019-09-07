import React, { useState } from "react";
import KeyCode from "../constants/KeyCode";

export default function TodoInput({ value, onAdd }) {
  value = value || "";
  onAdd = onAdd || (() => {});
  const [todoText, setTodoText] = useState(value);

  // useEffect(() => {
  //   console.log(todoText);
  // }, [todoText]);

  function handleAddClick() {
    if (todoText.trim().length === 0) {
      return;
    }
    onAdd(todoText);
    setTodoText("");
  }

  function handleKeyDown(e) {
    // console.log(e);
    if (e.keyCode === KeyCode.ENTER) {
      handleAddClick();
    }
  }

  function handleChange(event) {
    setTodoText(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={todoText}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}
