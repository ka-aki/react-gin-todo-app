import { connect } from "react-redux";
import { addTodo, toggleChecked } from "../redux/actions";
import TodoListPage from "../components/pages/TodoListPage";
import { ApplicationState } from "../redux/reducers";

const mapStateToProps = (state: ApplicationState) => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    addTodo: (input: string) => dispatch(addTodo(input)),
    toggleChecked: (id: number, checked: boolean) =>
      dispatch(toggleChecked(id, checked))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
