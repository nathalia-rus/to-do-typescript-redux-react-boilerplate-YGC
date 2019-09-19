import React from "react";

// import Button from "../atoms/button";
import { getTodos } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { IAppProps, IAppState, ITodo } from "../../redux/interface";

export class HomePage extends React.Component<IAppProps, IAppState> {
  state = {
    isLoading: false
  };

  todoList = (list: ITodo[]) => {
    if (list.length > 0) {
      return list.map((i: ITodo, index: any) => {
        return <div key={index}>{i.todo}</div>;
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>
          This website allows you to create todos and keep track of your to-do
          list :) :)
        </p>
        {console.log(this.props.todos)}
        <button type="button" onClick={() => this.props.getTodos()}>
          Test redux action
        </button>

        <p> Those are your to dos :</p>
        {this.todoList(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Function) => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

// const HomePage = () => (
//   <div>
//     <h1>Home Page</h1>
//     <Button> Submit </Button>
//     <p>
//       This website allows you to create tasks and keep track of your to-do list
//       :) :)
//     </p>
//   </div>
// );

// export default HomePage;
