import { ITodo } from "../interface";

import {
  ADD_TO_DO_SUCCESS,
  DELETE_TO_DO,
  EDIT_TO_DO,
  IGetTodosSuccessAction,
  IAddTodoSuccessAction,
  IDeleteTodoAction,
  IEditTodoAction,
  GET_TO_DOS_SUCCESS
} from "./actionTypes";

// acctions creators

export function addTodoSuccess(todo: ITodo): IAddTodoSuccessAction {
  return {
    type: ADD_TO_DO_SUCCESS,
    todo: todo
  };
}

export function getTodosSuccess(todos: ITodo[]): IGetTodosSuccessAction {
  return {
    type: GET_TO_DOS_SUCCESS,
    todos: todos
  };
}

export function deleteTodo(id: Number): IDeleteTodoAction {
  return {
    type: DELETE_TO_DO,
    id: id
  };
}

export function editTodo(editedTodo: ITodo): IEditTodoAction {
  return {
    type: EDIT_TO_DO,
    todo: editedTodo
  };
}
