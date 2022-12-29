import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleTodos = (getLatestTodo) => {
    const newTodo = [...todos];
    const indexOfLatestTodoItem = newTodo.findIndex(
      (item) => item.id === getLatestTodo
    );
    if (indexOfLatestTodoItem === -1) {
      newTodo.push(getLatestTodo);
    } else {
    }
    setTodos(newTodo);
    };
    const editTodo = (editedData) =>{}
  return (
    <>
      <TodoForm getNewTodoItem={handleTodos} />
      <TodoItem todos={todos} editTodo={editTodo} />
    </>
  );
};

export default TodoList;
