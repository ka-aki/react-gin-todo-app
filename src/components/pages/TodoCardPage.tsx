import React from "react";
import TodoCard from "../atoms/Card";
import { Link } from "react-router-dom";

const TodoCardPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/todoList">
        <TodoCard>ALL</TodoCard>
      </Link>
      <Link to="/todoList">
        <TodoCard>Home</TodoCard>
      </Link>
      <Link to="/todoList">
        <TodoCard>Work</TodoCard>
      </Link>
    </div>
  );
};

export default TodoCardPage;
