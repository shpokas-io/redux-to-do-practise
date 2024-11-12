import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
