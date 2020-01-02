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

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
          <ListItemText>{todo.text}</ListItemText>
          <ListItemText />
          <ListItemSecondaryAction>
            <Button color="primary">Edit</Button>
          </ListItemSecondaryAction>
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
