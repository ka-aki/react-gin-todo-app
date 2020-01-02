import React, { useState } from "react";
import styled from "@emotion/styled";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TodoList from "../organisms/TodoList";
import InputTodo from "../organisms/InputTodo";
import { Todo } from "../../redux/reducers/todo";

interface TodoListPageProps {
  todos: Todo[];
  addTodo: (input: string) => void;
  toggleChecked: (id: number, checked: boolean) => void;
  editingTodo: (id: number, editedText: string) => void;
}

const TodoListPage: React.FC<TodoListPageProps> = ({
  todos,
  addTodo,
  toggleChecked,
  editingTodo
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <TodoList
        todos={todos}
        toggleChecked={toggleChecked}
        editingTodo={editingTodo}
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
