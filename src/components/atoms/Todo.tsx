import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";
import { Todo as TodoType } from "../../redux/reducers/todo";
import { TextField } from "@material-ui/core";

interface TodoProps {
  todo: TodoType;
  toggleChecked: (id: number, checked: boolean) => void;
  editingTodo: (id: number, editedText: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleChecked, editingTodo }) => {
  const [checked, setChecked] = useState(true);
  const [edited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleChecked(todo.id, checked);
  };

  const edit = () => {
    editingTodo(todo.id, editedText);
    setEdited(false);
  };

  return (
    <ListContainer>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              onChange={handleChange}
              disableRipple
            />
          </ListItemIcon>
          {edited ? (
            <ListItemText>
              <TextField
                autoFocus
                onChange={e => setEditedText(e.target.value)}
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
              <Button color="primary" onClick={() => setEdited(true)}>
                Edit
              </Button>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </List>
    </ListContainer>
  );
};

export default Todo;

const ListContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
`;
