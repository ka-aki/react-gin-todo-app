import { TodoActionType, TodoAction } from "../actions";

export interface Todo {
  id: number;
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
    case TodoActionType.ADD_TODO:
      return {
        todos: state.todos.concat({
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        })
      };
    case TodoActionType.TOGGLE_CHECKED:
      return {
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo;
        })
      };
    case TodoActionType.EDITING_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo;
        })
      };

    default:
      return state;
  }
};

export default TodoReducer;
