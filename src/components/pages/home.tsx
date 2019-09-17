import React from "react";
import { connect } from "react-redux";
import { TodoState } from "../../redux/types";
import { AppState } from "../../redux/store/store";
import ITask from "../../redux/types";

import Button from "../atoms/button";

import { addTodo, getToDos } from "../../redux/actions/actions";

type ITodoProps = {
  todos: ITask[];
};

type IAddToDo = {
  addTodo: typeof addTodo;
};

type IGetToDos = {
  getToDos: typeof getToDos;
};

class HomePage extends React.Component<ITodoProps, IAddToDo> {
  componentDidMount() {
    this.props.addTodo({
      id: 0,
      content: "This is the first todo",
      completed: false,
      priority: "High"
    });
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Button> Submit </Button>
        <p>
          This website allows you to create tasks and keep track of your to-do
          list :) :)
        </p>

        {console.log("here", this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, getToDos }
)(HomePage);
