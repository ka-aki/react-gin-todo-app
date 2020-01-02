export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_CHECKED = "TOGGLE_CHECKED",
  EDITING_TODO = "EDITING_TODO"
}

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: {
    id: number;
    text: string;
    completed: boolean;
  };
}

let nextTodoId: number = 0;

export const addTodo = (text: string): AddTodoAction => ({
  type: TodoActionType.ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false
  }
});

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

interface editingTodo {
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

export type TodoAction = AddTodoAction | ToggleCheckedAction | editingTodo;
