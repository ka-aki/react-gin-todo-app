import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../reducers";

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  ADD_TODO_REQUEST = "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR = "ADD_TODO_ERROR",
  TOGGLE_CHECKED = "TOGGLE_CHECKED",
  EDITING_TODO = "EDITING_TODO"
}

interface AddTodoRequest {
  type: TodoActionType.ADD_TODO_REQUEST;
}

const addTodoRequest = (): AddTodoRequest => ({
  type: TodoActionType.ADD_TODO_REQUEST
});

interface AddTodoSuccess {
  type: TodoActionType.ADD_TODO_SUCCESS;
  payload: {
    id: number;
    text: string;
  };
}

const addTodoSuccess = (id: number, text: string): AddTodoSuccess => ({
  type: TodoActionType.ADD_TODO_SUCCESS,
  payload: {
    id,
    text
  }
});

interface AddTodoFail {
  type: TodoActionType.ADD_TODO_ERROR;
  payload: {
    error: any;
  };
}

const addTodoFail = (error: any): AddTodoFail => ({
  type: TodoActionType.ADD_TODO_ERROR,
  payload: {
    error: error
  }
});

export const addTodo = (
  text: string
): ThunkAction<
  Promise<void>,
  ApplicationState,
  undefined,
  TodoAction
> => async (dispatch, getState) => {
  dispatch(addTodoRequest());
  await fetch(`http://localhost:8080/todos`, {
    method: "POST",
    body: JSON.stringify({ text, completed: false })
  })
    .then(response => response.json())
    .then(data => dispatch(addTodoSuccess(data.ID, data.text)))
    .catch(error => dispatch(addTodoFail(error)));
};

interface ToggleCheckedAction {
  type: TodoActionType.TOGGLE_CHECKED;
  payload: {
    id: number;
    completed: boolean;
  };
}

export const toggleChecked = (
  id: number,
  checked: boolean
): ToggleCheckedAction => ({
  type: TodoActionType.TOGGLE_CHECKED,
  payload: {
    id: id,
    completed: checked
  }
});

interface EditingTodo {
  type: TodoActionType.EDITING_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export const editingTodo = (id: number, text: string) => ({
  type: TodoActionType.EDITING_TODO,
  payload: {
    id,
    text
  }
});

export type TodoAction =
  | ToggleCheckedAction
  | AddTodoRequest
  | AddTodoSuccess
  | AddTodoFail
  | EditingTodo;
