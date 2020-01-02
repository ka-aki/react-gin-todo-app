import React from "react";
import Todo from "../atoms/Todo";
import { Todo as TodoType } from "../../redux/reducers/todo";
import styled from "@emotion/styled";

interface TodoListProps {
  todos: TodoType[];
  toggleChecked: (id: number, checked: boolean) => void;
  editingTodo: (id: number, editedText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleChecked,
  editingTodo
}) => {
  return (
    <ul>
      {todos && todos.length >= 1
        ? todos.map((todo, i) => (
            <Todo
              todo={todo}
              toggleChecked={toggleChecked}
              editingTodo={editingTodo}
            />
          ))
        : "No Todo!"}
    </ul>
  );
};

export default TodoList;
