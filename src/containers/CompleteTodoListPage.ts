import { connect } from "react-redux";
import { addTodo, toggleChecked, editingTodo } from "../redux/actions";
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
    toggleChecked: (id: number, checked: boolean) =>
      dispatch(toggleChecked(id, checked)),
    editingTodo: (id: number, text: string) => dispatch(editingTodo(id, text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
