import { connect } from "react-redux";
import {
  addTodo,
  toggleChecked,
  editingTodo,
  getTodos
} from "../redux/actions";
import TodoListPage from "../components/pages/TodoListPage";
import { ApplicationState } from "../redux/reducers";

const mapStateToProps = (state: ApplicationState) => {
  return {
    todos: state.todo.todos.filter(todo => !todo.completed)
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    addTodo: (input: string) => dispatch(addTodo(input)),
    toggleChecked: (ID: number, checked: boolean) =>
      dispatch(toggleChecked(ID, checked)),
    editingTodo: (ID: number, text: string) => dispatch(editingTodo(ID, text)),
    getTodos: () => dispatch(getTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
