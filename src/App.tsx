import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled from "@emotion/styled";
import InputTodo from "./components/InputTodo";

const App: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <TodoList />
      <FabContainer color="secondary">
        <AddIcon onClick={() => setDialogOpen(true)} />
      </FabContainer>
      <InputTodo onClose={() => setDialogOpen(false)} open={isDialogOpen} />
    </>
  );
};

export default App;

const FabContainer = styled(Fab)`
  position: fixed !important;
  right: 10px;
  bottom: 10px;
`;
