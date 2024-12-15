import React from 'react';

const TodoItem = ({ task, onRemove }) => {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={onRemove} className="remove-btn">
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
