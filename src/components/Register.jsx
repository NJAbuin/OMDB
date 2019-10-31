import React from "react";
import axios from "axios";

export default class Register extends React.Component {
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
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/register", user)
      .then(res => this.props.history.push("/"))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div style={Style}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              style={input}
              type="text"
              name="username"
              onChange={this.userHandler}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              style={input}
              type="password"
              name="password"
              onChange={this.passwordHandler}
            />
          </div>
          <br />
          <div>
            <input style={center} type="submit" value="Register" />
          </div>
          <br />
        </form>
      </div>
    );
  }
}

const input = {
  width: "35%",
  padding: "12px 20px",
  margin: " 8px 15px",
  boxSizing: " border-box",
  backgroundColor: "#BEBEBE",
  display: "block"
};

const center = {
  textAlign: "center",
  allign: "center",
  margin: "auto",
  width: "35%",
  display: "block",
  border: "1px solid gold",
  lineHeight: "30px"
};

const Style = {
  backgroundColor: "black",
  color: "white",
  margin: "auto",
  width: "75%",
  border: "3px solid yellow",
  padding: "10px",

  textAllign: "center"
};
