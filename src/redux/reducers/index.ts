import { combineReducers } from "redux";
import todoReducer, { TodoState } from "./todo";

export interface ApplicationState {
  todo: TodoState;
}

export default combineReducers<ApplicationState>({ todo: todoReducer });
