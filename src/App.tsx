import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListAlt from "@material-ui/icons/ListAlt";
import DoneAll from "@material-ui/icons/DoneAll";
import AlarmOn from "@material-ui/icons/AlarmOn";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TodoListPage from "./containers/TodoListPage";
import IncompleteTodoListPage from "./containers/IncompleteTodoListPage";
import CompleteTodoListPage from "./containers/CompleteTodoListPage";

const drawerWidth = 200;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <AppBar
            position="fixed"
            style={{
              width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
              marginLeft: open ? drawerWidth : 60,
              zIndex: 2100,
              flexShrink: 0,
              transition: "all 0.3s ease-in-out"
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                edge="start"
                style={{ display: open ? "none" : "block" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Todoアプリ</Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            PaperProps={{
              style: {
                width: open ? drawerWidth : 60,
                transition: "all 0.3s ease-in-out"
              }
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: 8
              }}
            >
              <IconButton onClick={() => setOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <ListItem button>
                  <ListItemIcon>
                    <ListAlt />
                  </ListItemIcon>
                  <ListItemText primary="All" />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/incomplete"
              >
                <ListItem button>
                  <ListItemIcon>
                    <AlarmOn />
                  </ListItemIcon>
                  <ListItemText primary="incomplete" />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/complete"
              >
                <ListItem button>
                  <ListItemIcon>
                    <DoneAll />
                  </ListItemIcon>
                  <ListItemText primary="complete" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Route exact path="/" component={TodoListPage} />
          <Route exact path="/incomplete" component={IncompleteTodoListPage} />
          <Route exact path="/complete" component={CompleteTodoListPage} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
