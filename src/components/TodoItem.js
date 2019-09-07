import React from "react";

export default function TodoItem({ data, onCompleted }) {
  return (
    <li>
      <span>{data.text}</span>
      <input
        type="checkbox"
        checked={data.completed}
        onChange={() => onCompleted(data)}
      />
    </li>
  );
}
