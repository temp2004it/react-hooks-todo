import React from "react";
import KeyCode from "../constants/KeyCode";

export default function({ value, onSubmit, onChange, onCancel }) {
  function handleKeyDown(e) {
    if (onChange && e.keyCode === KeyCode.ENTER) {
      onSubmit();
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <button onClick={onSubmit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
