import React from "react";
import axios from "axios";
import { loginUser } from "../actions/user";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.userHandler = this.userHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userHandler(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  passwordHandler(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.loginUser(this.state);
    console.log(`${this.state.username} is logged in`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={this.userHandler} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.passwordHandler}
            />
          </div>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    foundMovies: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    loginUser: user => dispatch(loginUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
