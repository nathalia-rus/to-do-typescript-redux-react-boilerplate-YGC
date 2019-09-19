import {
  ADD_TO_DO_SUCCESS,
  DELETE_TO_DO,
  GET_TO_DOS_SUCCESS,
  todoActionTypes
} from "../actions/actionTypes";

import { IStoreData } from "../interface";

const initialState: IStoreData = {
  todos: []
};

export function todoReducer(
  state = initialState,
  action: todoActionTypes
): IStoreData {
  switch (action.type) {
    case GET_TO_DOS_SUCCESS:
      // return {
      //   todos: [...state.todos]
      // };
      return {
        todos: action.todos.map(todo => todo)
      };
    case ADD_TO_DO_SUCCESS:
      return {
        todos: [...state.todos, action.todo]
      };
    case DELETE_TO_DO:
      return {
        todos: state.todos.filter(
          todo => todo.id.toString() !== action.id.toString()
        )
      };
    default:
      return state;
  }
}

export default todoReducer;
