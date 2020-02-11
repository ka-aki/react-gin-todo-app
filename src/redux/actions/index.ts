import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../reducers";
import { Todo } from "../reducers/todo";

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  ADD_TODO_REQUEST = "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR = "ADD_TODO_ERROR",
  TOGGLE_CHECKED_REQUEST = "TOGGLE_CHECKED_REQUEST",
  TOGGLE_CHECKED_SUCCESS = "TOGGLE_CHECKED_SUCCESS",
  TOGGLE_CHECKED_FAIL = "TOGGLE_CHECKED_FAIL",
  EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST",
  EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS",
  EDIT_TODO_FAIL = "EDIT_TODO_FAIL",
  GET_TODOS_REQUEST = "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  GET_TODOS_FAIL = "GET_TODOS_FAIL",
  DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST",
  DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS",
  DELETE_TODO_FAIL = "DELETE_TODO_FAIL"
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
  await fetch("http://localhost:8080/todos", {
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
  Promise<void>,
  ApplicationState,
  undefined,
  TodoAction
> => async dispatch => {
  dispatch(getTodosRequest());
  try {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();
    dispatch(getTodosSuccess(data));
  } catch (error) {
    dispatch(getTodosFail(error));
  }
};

interface ToggleCheckedRequest {
  type: TodoActionType.TOGGLE_CHECKED_REQUEST;
}

const toggleCheckedRequest = (): ToggleCheckedRequest => ({
  type: TodoActionType.TOGGLE_CHECKED_REQUEST
});

interface ToggleCheckedSuccess {
  type: TodoActionType.TOGGLE_CHECKED_SUCCESS;
  payload: {
    ID: number;
    completed: boolean;
  };
}

export const toggleCheckedSuccess = (
  ID: number,
  checked: boolean
): ToggleCheckedSuccess => ({
  type: TodoActionType.TOGGLE_CHECKED_SUCCESS,
  payload: {
    ID: ID,
    completed: checked
  }
});

interface ToggleCheckedFail {
  type: TodoActionType.TOGGLE_CHECKED_FAIL;
  payload: {
    error: Error;
  };
}

const toggleCheckedFail = (error: Error): ToggleCheckedFail => ({
  type: TodoActionType.TOGGLE_CHECKED_FAIL,
  payload: {
    error
  }
});

export const toggleChecked = (
  ID: number,
  checked: boolean
): ThunkAction<
  Promise<void>,
  ApplicationState,
  undefined,
  TodoAction
> => async dispatch => {
  dispatch(toggleCheckedRequest());
  try {
    const response = await fetch(`http://localhost:8080/todos/${ID}`, {
      method: "PUT",
      body: JSON.stringify({ completed: checked })
    });
    const data = await response.json();
    dispatch(toggleCheckedSuccess(data.ID, data.completed));
  } catch (error) {
    dispatch(toggleCheckedFail(error));
  }
};

interface DeleteTodoRequest {
  type: TodoActionType.DELETE_TODO_REQUEST;
}

const deleteTodoRequest = (): DeleteTodoRequest => ({
  type: TodoActionType.DELETE_TODO_REQUEST
});

interface DeleteTodoSuccess {
  type: TodoActionType.DELETE_TODO_SUCCESS;
  payload: {
    ID: number;
  };
}

const deleteTodoSuccess = (ID: number): DeleteTodoSuccess => ({
  type: TodoActionType.DELETE_TODO_SUCCESS,
  payload: {
    ID
  }
});

interface DeleteTodoFail {
  type: TodoActionType.DELETE_TODO_FAIL;
  payload: {
    error: Error;
  };
}

const deleteTodoFail = (error: Error): DeleteTodoFail => ({
  type: TodoActionType.DELETE_TODO_FAIL,
  payload: {
    error
  }
});

export const deleteTodo = (
  ID: number
): ThunkAction<
  Promise<void>,
  ApplicationState,
  undefined,
  TodoAction
> => async dispatch => {
  dispatch(deleteTodoRequest());

  try {
    await fetch(`http://localhost:8080/todos/${ID}`, {
      method: "DELETE",
      body: JSON.stringify({ ID })
    });
    dispatch(deleteTodoSuccess(ID));
  } catch (error) {
    dispatch(deleteTodoFail(error));
  }
};

interface EditTodoRequest {
  type: TodoActionType.EDIT_TODO_REQUEST;
}

const editTodoRequest = (): EditTodoRequest => ({
  type: TodoActionType.EDIT_TODO_REQUEST
});

interface EditTodoSuccess {
  type: TodoActionType.EDIT_TODO_SUCCESS;
  payload: {
    ID: number;
    text: string;
  };
}

const editTodoSuccess = (ID: number, text: string): EditTodoSuccess => ({
  type: TodoActionType.EDIT_TODO_SUCCESS,
  payload: {
    ID,
    text
  }
});

interface EditTodoFail {
  type: TodoActionType.EDIT_TODO_FAIL;
  payload: {
    error: Error;
  };
}

const editTodoFail = (error: Error): EditTodoFail => ({
  type: TodoActionType.EDIT_TODO_FAIL,
  payload: {
    error
  }
});

export const editTodo = (
  ID: number,
  text: string
): ThunkAction<
  Promise<void>,
  ApplicationState,
  undefined,
  TodoAction
> => async dispatch => {
  dispatch(editTodoRequest());

  try {
    const response = await fetch(`http://localhost:8080/todos/${ID}`, {
      method: "PUT",
      body: JSON.stringify({ ID, text })
    });

    const data = await response.json();
    dispatch(editTodoSuccess(data.ID, data.text));
  } catch (error) {
    dispatch(editTodoFail(error));
  }
};

export type TodoAction =
  | ToggleCheckedRequest
  | ToggleCheckedSuccess
  | ToggleCheckedFail
  | AddTodoRequest
  | AddTodoSuccess
  | AddTodoFail
  | EditTodoRequest
  | EditTodoSuccess
  | EditTodoFail
  | GetTodosRequest
  | GetTodosSuccess
  | GetTodosFail
  | DeleteTodoRequest
  | DeleteTodoSuccess
  | DeleteTodoFail;
