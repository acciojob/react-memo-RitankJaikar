import React, { useMemo } from "react";

const UseMemoComponent = ({ todos }) => {
  // Expensive calculation: Count todos with more than 5 characters
  const longTasksCount = useMemo(() => {
    console.log("Calculating long tasks...");
    return todos.filter((todo) => todo.length > 5).length;
  }, [todos]);

  return (
    <div>
      <h3>UseMemo Component</h3>
      <p>Number of tasks with more than 5 characters: {longTasksCount}</p>
    </div>
  );
};

export default UseMemoComponent;
