import React, { useState } from "react";
import "../styles/App.css";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]); // List of tasks
  const [counter, setCounter] = useState(0); // Counter
  const [input, setInput] = useState(""); // Input for custom task

  // Add a new task labeled "New todo"
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Submit custom task if it has more than 5 characters
  const submitCustomTask = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput(""); // Clear input field after adding the task
    } else {
      alert("Custom task must have more than 5 characters.");
    }
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter custom task"
        />
        <button onClick={submitCustomTask}>Submit</button>
      </div>
      <UseMemoComponent todos={todos} />
      <ReactMemoComponent todos={todos} />
      <p>Counter: {counter}</p>
    </div>
  );
};

export default App;
