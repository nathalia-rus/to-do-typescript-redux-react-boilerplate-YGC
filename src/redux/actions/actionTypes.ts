import ITask from "../types";
import IId from "../types";

export const ADD_TO_DO = "ADD_TO_DO";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const EDIT_TO_DO = "EDIT_TO_DO";

interface addTodoAction {
  type: typeof ADD_TO_DO;
  payload: ITask;
}

interface deleteTodoAction {
  type: typeof DELETE_TO_DO;
  payload: IId;
}

interface editTodoAction {
  type: typeof EDIT_TO_DO;
  payload: ITask;
}

export type todoActionTypes = addTodoAction | deleteTodoAction | editTodoAction;
