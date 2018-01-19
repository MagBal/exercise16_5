import React from "react";
import style from "./TodoList.css";

const Todo = ({ item, removeItem }) => {
  return <li onClick={() => removeItem(item.id)}>{item.text}</li>;
};

const TodoList = ({ taskToDo, remove }) => {
  const todoList = taskToDo.map(todo => {
    return <Todo item={todo} removeItem={remove} key={todo.id} />;
  });

  return <ol>{todoList}</ol>;
};

export default TodoList;