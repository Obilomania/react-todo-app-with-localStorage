import React, { useEffect, useState } from "react";
import { RiH1 } from "react-icons/ri";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoData, setEditTodoData] = useState(null);
  const [searchTodo, setSearchTodo] = useState("");
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
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTodo(value.toLowerCase());
  };

  const filterTodo =
    todos && todos.length
      ? todos.filter((item) => item.text.toLowerCase().includes(searchTodo))
      : [];

  const editTodo = (editedData) => {
    setEditTodoData(editedData);
  };

  const deleteTodo = (deletebyId) => {
    let getTodos = [...todos];
    getTodos = getTodos.filter((item) => item.id !== deletebyId);
    setTodos(getTodos);
    localStorage.setItem("todoList", JSON.stringify(getTodos));
  };

  useEffect(() => {
    const gettodosfromLocalStorage = JSON.parse(
      localStorage.getItem("todoList")
    );
    if (gettodosfromLocalStorage && gettodosfromLocalStorage.length) {
      setTodos(gettodosfromLocalStorage);
    }
  }, []);
  return (
    <AppJS>
      <div className="searchTodo">
        <label htmlFor="">Search todo</label>
        <input
          placeholder="Search Todo"
          type="text"
          name="search"
          onChange={handleSearch}
          value={searchTodo}
        />
      </div>
      <TodoForm getNewTodoItem={handleTodos} editTodoData={editTodoData} />
      {filterTodo && filterTodo.length ? (
        <TodoItem
          todos={filterTodo}
          editTodo={editTodo}
          getTodobyId={deleteTodo}
        />
      ) : (
        <h5>
          No <b>To-do</b> Found!!!{" "}
        </h5>
      )}
    </AppJS>
  );
};

const AppJS = styled.div`
  width: 100%;
  .searchTodo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .searchTodo input {
    width: 30%;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
  }
  h5 {
    text-align: center;
    color: red;
  }
`;

export default TodoList;
