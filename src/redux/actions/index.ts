export enum TodoActionType {
  ADD_TODO = "ADD_TODO"
}

export interface AddTodoAction {
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

export type TodoAction = AddTodoAction;
