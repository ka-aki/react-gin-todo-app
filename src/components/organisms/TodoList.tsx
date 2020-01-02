import React from "react";
import Todo from "../atoms/Todo";
import { Todo as TodoType } from "../../redux/reducers/todo";
import styled from "@emotion/styled";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos && todos.length >= 1
        ? todos.map((todo, i) => <Todo todo={todo} />)
        : "No Todo!"}
    </ul>
  );
};

export default TodoList;
