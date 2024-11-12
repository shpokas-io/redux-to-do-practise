import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toggleTodo, deleteTodo } from "../store/todoSlice";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center space-x-2">
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`cursor-pointer flex-1 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
