import React from "react";

// React.memo to avoid unnecessary re-renders
const ReactMemoComponent = React.memo(({ todos }) => {
  console.log("Rendering ReactMemoComponent...");
  return (
    <div>
      <h3>React Memo Component</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;