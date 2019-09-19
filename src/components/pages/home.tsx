import React from "react";

import Button from "../atoms/button";
import { getTodos } from "../../redux/actions/todoActions";
import { connect } from "react-redux";
import { AppProps, AppState } from "../../redux/actions/interface";

export class HomePage extends React.Component<AppProps, AppState> {
  state = {
    isLoading: false
  };

  simpleAction = () => {
    this.props.getTodos();
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Button> Submit </Button>
        <p>
          This website allows you to create tasks and keep track of your to-do
          list :) :)
        </p>
        <p>{JSON.stringify(this.props)}</p>
        <button type="button" onClick={() => this.simpleAction}>
          Test redux action
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: function) => ({
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
