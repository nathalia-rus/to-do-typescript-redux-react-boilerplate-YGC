import ITask from "../types";
import IId from "../types";

import {
  ADD_TO_DO,
  DELETE_TO_DO,
  EDIT_TO_DO,
  todoActionTypes
} from "./actionTypes";

export function addTodo(newTask: ITask): todoActionTypes {
  return {
    type: ADD_TO_DO,
    payload: newTask
  };
}

export function deleteTodo(id: IId): todoActionTypes {
  return {
    type: DELETE_TO_DO,
    payload: id
  };
}

export function editTodo(editedTodo: ITask): todoActionTypes {
  return {
    type: EDIT_TO_DO,
    payload: editedTodo
  };
}
