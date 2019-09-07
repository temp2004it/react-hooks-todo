import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onCompleted, onDelete }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.uuid}
          data={todo}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
