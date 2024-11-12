import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const TodoInput: React.fc = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="flex space-x-2">
      <input
        className="border p-2 flex-1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new to-do"
      />
      <Button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
