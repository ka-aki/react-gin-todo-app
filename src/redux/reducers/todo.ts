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

    default:
      return state;
  }
};

export default TodoReducer;
