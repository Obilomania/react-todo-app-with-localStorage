import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";

const todoItem = (props) => {
  const { todos, editTodo } = props;
  return (
    <TodoThings>
      <div className="content">
        {todos.map((todoItem, index) => {
          return (
            <div key={`${todoItem.id}${index}`} className="todo-items">
              <p className="todo-text">{todoItem.text}</p>
              <div className="icons">
                <RiCloseLine size={20} />
                <TiEdit
                  size={20}
                  onClick={() =>
                    editTodo({ id: todoItem.id, text: todoItem.text })
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </TodoThings>
  );
};

const TodoThings = styled.div`
  width: 100%;
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem;
  }
  .todo-items {
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    width: 47%;
    border: 2px solid black;
    padding: 0.7rem;
    border-radius: 0.5rem;
  }
  .todotext {
    width: 40%;
  }
  .icons {
    display: flex;
    gap: 1rem;
  }
`;
export default todoItem;
