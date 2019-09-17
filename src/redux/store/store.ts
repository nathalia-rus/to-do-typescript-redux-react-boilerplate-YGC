import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  ADD_TO_DO,
  GET_TO_DOS,
  DELETE_TO_DO,
  todoActionTypes
} from "../actions/actionTypes";
import { composeWithDevTools } from "redux-devtools-extension";

import ITask from "../types";

export interface appState {
  todos: ITask[];
}

const initialState: appState = {
  todos: []
};

export function appReducer(
  state = initialState,
  action: todoActionTypes
): appState {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        todos: [...state.todos, action.payload]
      };
    case DELETE_TO_DO:
      return {
        todos: state.todos.filter(
          todo => todo.id.toString() !== action.payload.toString()
        )
      };
    case GET_TO_DOS:
      return {
        ...state
      };
    default:
      return state;
  }
}

export type AppState = ReturnType<typeof appReducer>;

export default function configureStore() {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    appReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
