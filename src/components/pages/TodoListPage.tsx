import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TodoList from "../organisms/TodoList";
import InputTodo from "../organisms/InputTodo";
import { Todo } from "../../redux/reducers/todo";

interface TodoListPageProps {
  todos: Todo[];
  addTodo: (input: string) => void;
  toggleChecked: (ID: number, checked: boolean) => void;
  editTodo: (ID: number, editedText: string) => void;
  getTodos: () => void;
  deleteTodo: (ID: number) => void;
}

const TodoListPage: React.FC<TodoListPageProps> = ({
  todos,
  addTodo,
  toggleChecked,
  editTodo,
  getTodos,
  deleteTodo
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <TodoList
        todos={todos}
        toggleChecked={toggleChecked}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
      <FabContainer color="secondary" onClick={() => setDialogOpen(true)}>
        <AddIcon />
      </FabContainer>
      <InputTodo
        onClose={() => setDialogOpen(false)}
        open={isDialogOpen}
        addTodo={addTodo}
      />
    </>
  );
};

export default TodoListPage;

const FabContainer = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
`;
