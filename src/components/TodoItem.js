import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ data, onCompleted, onDelete, onEdit }) {
  return (
    <li className="todo-item">
      <span>{data.text}</span>
      <div className="actions">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => onCompleted(data)}
        />

        <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete(data)} />
        <FontAwesomeIcon icon={faEdit} onClick={() => onEdit(data)} />
      </div>
    </li>
  );
}
