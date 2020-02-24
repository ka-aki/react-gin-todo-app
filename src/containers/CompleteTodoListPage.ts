import { connect } from "react-redux";
import {
  addTodo,
  toggleChecked,
  editTodo,
  getTodos,
  deleteTodo
} from "../redux/actions";
import TodoListPage from "../components/pages/TodoListPage";
import { ApplicationState } from "../redux/reducers";

const mapStateToProps = (state: ApplicationState) => {
  return {
    todos: state.todo.todos.filter(todo => todo.completed)
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    addTodo: (input: string) => dispatch(addTodo(input)),
    toggleChecked: (ID: number, checked: boolean) =>
      dispatch(toggleChecked(ID, checked)),
    editTodo: (ID: number, text: string) => dispatch(editTodo(ID, text)),
    getTodos: () => dispatch(getTodos()),
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
