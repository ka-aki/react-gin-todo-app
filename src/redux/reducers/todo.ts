import { TodoActionType, TodoAction } from "../actions";

export interface Todo {
  ID: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const TodoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD_TODO_SUCCESS:
      return {
        todos: state.todos.concat({
          ID: action.payload.ID,
          text: action.payload.text,
          completed: false
        })
      };
    case TodoActionType.TOGGLE_CHECKED_SUCCESS:
      return {
        todos: state.todos.map(todo => {
          return todo.ID === action.payload.ID
            ? { ...todo, completed: action.payload.completed }
            : todo;
        })
      };
    case TodoActionType.EDIT_TODO_SUCCESS:
      return {
        todos: state.todos.map(todo => {
          return todo.ID === action.payload.ID
            ? { ...todo, text: action.payload.text }
            : todo;
        })
      };
    case TodoActionType.GET_TODOS_SUCCESS:
      return {
        todos: action.payload.todos
      };

    default:
      return state;
  }
};

export default TodoReducer;
