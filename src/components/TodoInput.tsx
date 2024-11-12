import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Button, TextField } from "@mui/material";

const TodoInput: React.FC = () => {
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
      <TextField
        variant="outlined"
        label="Add a new to-do"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button onClick={handleAddTodo} variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
