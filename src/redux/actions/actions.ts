import { getTodosSuccess } from "./actioncreators";
import { IGetTodosSuccessAction } from "./actionTypes";
import data from "../data.json";

export const getTodos = () => {
  return (dispatch: (arg0: IGetTodosSuccessAction) => void) => {
    const response = data;
    if (response.status === 200) {
      dispatch(getTodosSuccess(data.todos));
    } else {
      console.log("there's been an error");
      // dispatch error action
    }
  };
};
