import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoData, setEditTodoData] = useState(null);
  const handleTodos = (getLatestTodo) => {
    const newTodo = [...todos];
    const indexOfLatestTodoItem = newTodo.findIndex(
      (item) => item.id === getLatestTodo.id
    );
    if (indexOfLatestTodoItem === -1) {
      newTodo.push(getLatestTodo);
    } else {
      console.log(indexOfLatestTodoItem, getLatestTodo);
      newTodo[indexOfLatestTodoItem] = {
        ...newTodo[indexOfLatestTodoItem],
        text: getLatestTodo.text,
      };
    }
    setTodos(newTodo);
  };
  const editTodo = (editedData) => {
    setEditTodoData(editedData);
  };

  const deleteTodo = (deletebyId) => {
    let getTodos = [...todos];
    getTodos = getTodos.filter((item) => item.id !== deletebyId);
    setTodos(getTodos);
  };
  return (
    <>
      <TodoForm getNewTodoItem={handleTodos} editTodoData={editTodoData} />
      <TodoItem todos={todos} editTodo={editTodo} getTodobyId={deleteTodo} />
    </>
  );
};

export default TodoList;
