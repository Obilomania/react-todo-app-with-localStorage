import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoForm = (props) => {
  const { getNewTodoItem, editTodoData } = props;
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  //   const isEdit = editTodoData && Object.keys(editTodoData).length !== 0;

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: isEdit ? editTodoData.id : Math.floor(Math.random() * 1000),
      text: inputValue,
    };
    getNewTodoItem(newTodo);
    setInputValue("");
    setIsEdit(false );
  };

  useEffect(() => {
    if (editTodoData && Object.keys(editTodoData).length !== 0) {
      setInputValue(editTodoData.text);
      setIsEdit(true);
    }
  }, [editTodoData]);

  return (
    <Todo>
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          type="text"
          name="input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a to-do"
        />
        <button type="submit">{isEdit ? "Edit Todo" : "Add Todo"}</button>
      </form>
    </Todo>
  );
};

const Todo = styled.div`
  width: 100%;
  /* height: 100vh; */
  .todoForm {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
    gap: 0.5rem;
    width: 100%;
  }
  input {
    width: 40%;
    padding: 0.7rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  button {
    padding: 0.7rem;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;
  }
`;
export default TodoForm;
