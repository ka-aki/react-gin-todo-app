import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TodoCardPage from "./components/pages/TodoCardPage";
import TodoListPage from "./containers/TodoListPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Todoアプリ</Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={TodoCardPage} />
        <Route path="/todoList" component={TodoListPage} />
      </BrowserRouter>
    </>
  );
};

export default App;
