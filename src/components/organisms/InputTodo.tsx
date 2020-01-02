import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions
} from "@material-ui/core";

interface InputTodoProps {
  open: boolean;
  onClose: () => void;
  addTodo: (input: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ open, onClose, addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    addTodo(inputText);
    setInputText("");
  };

  return (
    <Dialog fullWidth maxWidth={"sm"} onClose={() => onClose()} open={open}>
      <DialogTitle>Todoを追加する</DialogTitle>
      <DialogContent>
        <DialogContentText>やること</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="secondary">
          キャンセル
        </Button>
        <Button onClick={handleAddTodo} color="primary">
          決定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputTodo;
