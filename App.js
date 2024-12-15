import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), task }]);
      setTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task.task}
            onRemove={() => handleRemoveTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
