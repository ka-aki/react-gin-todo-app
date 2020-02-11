import React from "react";
import Todo from "../atoms/Todo";
import { Todo as TodoType } from "../../redux/reducers/todo";
import styled from "@emotion/styled";

interface TodoListProps {
  todos: TodoType[];
  toggleChecked: (ID: number, checked: boolean) => void;
  editingTodo: (ID: number, editedText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleChecked,
  editingTodo
}) => {
  return (
    <Container>
      {todos && todos.length >= 1
        ? todos.map((todo, index) => (
            <Todo
              todo={todo}
              key={index}
              toggleChecked={toggleChecked}
              editingTodo={editingTodo}
            />
          ))
        : "yey! no todos!"}
    </Container>
  );
};

export default TodoList;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;
