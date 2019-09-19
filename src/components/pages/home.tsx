import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { TodoState } from "../../redux/types";
import { AppState } from "../../redux/store/store";
import ITask from "../../redux/types";

import Button from "../atoms/button";

import { addTodo, getToDos } from "../../redux/actions/actions";

type Props = {
  todos: ITask[];
  addTodo: typeof addTodo;
  getToDos: typeof getToDos;
};

const HomePage: React.FC<Props> = ({ todos, addTodo, getToDos }) => {
  useEffect(() => {
    addTodo({
      id: 0,
      content: "this is the first note",
      completed: false,
      priority: "high"
    });
  });

  return (
    <div>
      <h1>Home Page</h1>
      <Button> Submit </Button>
      <p>
        This website allows you to create tasks and keep track of your to-do
        list :) :)
      </p>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, getToDos }
)(HomePage);

// class HomePage extends React.Component<ITodoProps, IAddToDo> {
//   componentDidMount() {
//     this.props.addTodo({
//       id: 0,
//       content: "This is the first todo",
//       completed: false,
//       priority: "High"
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Home Page</h1>
//         <Button> Submit </Button>
//         <p>
//           This website allows you to create tasks and keep track of your to-do
//           list :) :)
//         </p>

//         {console.log("here", this.props.todos)}
//       </div>
//     );
//   }
// }
