import { ITodo } from "../interface";

export const ADD_TO_DO_SUCCESS = "ADD_TO_DO_SUCCESS";
export const GET_TO_DOS_SUCCESS = "GET_TO_DOS_SUCCESS";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const EDIT_TO_DO = "EDIT_TO_DO";

// action creator interfaces

export interface IAddTodoSuccessAction {
  type: typeof ADD_TO_DO_SUCCESS;
  todo: ITodo;
}

export interface IDeleteTodoAction {
  type: typeof DELETE_TO_DO;
  id: Number;
}

export interface IEditTodoAction {
  type: typeof EDIT_TO_DO;
  todo: ITodo;
}

export interface IGetTodosSuccessAction {
  type: typeof GET_TO_DOS_SUCCESS;
  todos: ITodo[];
}

// cen be useful for the store:

export type todoActionTypes =
  | IAddTodoSuccessAction
  | IDeleteTodoAction
  | IEditTodoAction
  | IGetTodosSuccessAction;
