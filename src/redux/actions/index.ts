import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../reducers";
import { Todo } from "../reducers/todo";

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  ADD_TODO_REQUEST = "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR = "ADD_TODO_ERROR",
  TOGGLE_CHECKED = "TOGGLE_CHECKED",
  EDITING_TODO = "EDITING_TODO",
  GET_TODOS_REQUEST = "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  GET_TODOS_FAIL = "GET_TODOS_FAIL"
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
    ID: number;
    text: string;
  };
}

const addTodoSuccess = (ID: number, text: string): AddTodoSuccess => ({
  type: TodoActionType.ADD_TODO_SUCCESS,
  payload: {
    ID,
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

interface GetTodosRequest {
  type: TodoActionType.GET_TODOS_REQUEST;
}

const getTodosRequest = (): GetTodosRequest => ({
  type: TodoActionType.GET_TODOS_REQUEST
});

interface GetTodosSuccess {
  type: TodoActionType.GET_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
}

const getTodosSuccess = (todos: Todo[]): GetTodosSuccess => ({
  type: TodoActionType.GET_TODOS_SUCCESS,
  payload: {
    todos
  }
});

interface GetTodosFail {
  type: TodoActionType.GET_TODOS_FAIL;
  payload: {
    error: Error;
  };
}
const getTodosFail = (error: Error): GetTodosFail => ({
  type: TodoActionType.GET_TODOS_FAIL,
  payload: {
    error: error
  }
});

export const getTodos = (): ThunkAction<
  void,
  ApplicationState,
  undefined,
  TodoAction
> => async dispatch => {
  dispatch(getTodosRequest());
  try {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();
    console.log(response, "response");
    dispatch(getTodosSuccess(data));
  } catch (error) {
    dispatch(getTodosFail(error));
  }
};

interface ToggleCheckedAction {
  type: TodoActionType.TOGGLE_CHECKED;
  payload: {
    ID: number;
    completed: boolean;
  };
}

export const toggleChecked = (
  ID: number,
  checked: boolean
): ToggleCheckedAction => ({
  type: TodoActionType.TOGGLE_CHECKED,
  payload: {
    ID: ID,
    completed: checked
  }
});

interface EditingTodo {
  type: TodoActionType.EDITING_TODO;
  payload: {
    ID: number;
    text: string;
  };
}

export const editingTodo = (ID: number, text: string) => ({
  type: TodoActionType.EDITING_TODO,
  payload: {
    ID,
    text
  }
});

export type TodoAction =
  | ToggleCheckedAction
  | AddTodoRequest
  | AddTodoSuccess
  | AddTodoFail
  | EditingTodo
  | GetTodosRequest
  | GetTodosSuccess
  | GetTodosFail;
