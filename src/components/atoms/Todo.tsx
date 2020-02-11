import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import { Todo as TodoType } from "../../redux/reducers/todo";
import {
  TextField,
  IconButton,
  FormControlLabel,
  Tooltip
} from "@material-ui/core";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

interface TodoProps {
  todo: TodoType;
  toggleChecked: (ID: number, checked: boolean) => void;
  editTodo: (ID: number, editedText: string) => void;
  deleteTodo: (ID: number) => void;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  toggleChecked,
  editTodo,
  deleteTodo
}) => {
  const [edited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState("");

  const edit = () => {
    editTodo(todo.ID, editedText);
    setEdited(false);
  };

  return (
    <ListContainer>
      <List>
        <ListItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleChecked(todo.ID, !todo.completed)}
                disableRipple
                icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 25 }} />}
                checkedIcon={<CheckBoxIcon style={{ fontSize: 25 }} />}
              />
            }
            label=""
          />
          {edited ? (
            <ListItemText>
              <TextField
                autoFocus
                fullWidth
                placeholder={todo.text}
                onChange={e => setEditedText(e.target.value)}
                style={{ width: 400 }}
              />
            </ListItemText>
          ) : (
            <ListItemText>{todo.text}</ListItemText>
          )}
          {edited ? (
            <ListItemSecondaryAction>
              <Button color="secondary" onClick={() => setEdited(false)}>
                cancel
              </Button>
              <Button color="primary" onClick={edit}>
                done
              </Button>
            </ListItemSecondaryAction>
          ) : (
            <ListItemSecondaryAction>
              <Tooltip title="Edit" placement="top">
                <IconButton aria-label="edit" onClick={() => setEdited(true)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTodo(todo.ID)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </List>
    </ListContainer>
  );
};

export default Todo;

const ListContainer = styled.div`
  width: 700px;
  margin: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
`;
