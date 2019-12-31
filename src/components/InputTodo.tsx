import React from "react";
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
}

const InputTodo: React.FC<InputTodoProps> = ({ open, onClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      onClose={() => console.log("handleClose")}
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Todoを追加する</DialogTitle>
      <DialogContent>
        <DialogContentText>やること</DialogContentText>
        <TextField autoFocus margin="dense" variant="outlined" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="secondary">
          キャンセル
        </Button>
        <Button onClick={() => console.log("handleClose")} color="primary">
          決定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputTodo;
