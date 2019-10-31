import React, { Component } from "react";
import axios from "axios";
import SingleMovie from "../components/SingleMovie";
import { fetchMovie } from "../actions/movies";
import { logOutUser, loginUser } from "../actions/user";
import store from "../store";
import { connect } from "react-redux";
import { LOGIN_USER } from "../constants";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.handleReg = this.handleReg.bind(this);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchMovie(this.state.title);

    // axios
    //   .get(`${omdb}s=${this.state.title}`)
    //   .then(response => this.setState({ movies: response.data.Search }));
  }

  componentWillMount() {
    axios.get("/api/isLogin").then(res => {
      if (res.data.username) {
        this.props.loginUser(res.data.username);
      }
    });
  }

  handleLog(e) {
    e.preventDefault();
    this.props.history.push("/api/login");
  }
  handleReg(e) {
    e.preventDefault();
    this.props.history.push("/api/register");
  }

  logOutHandler(e) {
    e.preventDefault;
    this.props.logOutUser();
  }

  render() {
    var btns;
    if (this.props.users.username === "") {
      btns = (
        <div style={rigth}>
          <button onClick={this.handleLog}>Log In</button>
          <button onClick={this.handleReg}>Register</button>
        </div>
      );
    } else {
      btns = (
        <div style={rigth}>
          <button onClick={this.logOutHandler}>Log Out</button>
          <p>Welcome {this.props.users.username}</p>
        </div>
      );
    }

    return (
      <div style={searchStyle}>
        <form style={center} onSubmit={this.handleSubmit}>
          <label>
            <h3 style={{ display: "inline-block", marginRight: "30px" }}>
              Title:{" "}
            </h3>
            <input style={input} type="text" onChange={this.handleChange} />
          </label>
          <input style={input} type="submit" value="Search" />
        </form>
        <br />
        <div style={rigth}> {btns} </div>
        <hr />
        <br />
        <SingleMovie />
      </div>
    );
  }
}

const input = {
  width: "35%",
  padding: "12px 20px",
  margin: " 8px 15px",
  boxSizing: " border-box",
  backgroundColor: "#BEBEBE"
};

const rigth = {
  textAlign: "right",
  display: "block",
  lineHeight: "30px"
};

const center = {
  textAlign: "center",
  border: "1px solid gold"
};

const searchStyle = {
  backgroundColor: "black",
  color: "white",
  margin: "auto",
  width: "75%",
  border: "3px solid yellow",
  padding: "10px",

  textAllign: "center"
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: title => dispatch(fetchMovie(title)),
  logOutUser: () => dispatch(logOutUser()),
  loginUser: user =>
    dispatch({
      type: LOGIN_USER,
      payload: user
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
