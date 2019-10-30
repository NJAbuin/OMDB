import React, { Component } from "react";
import axios from "axios";
import SingleMovie from "../components/SingleMovie";
import { fetchMovie } from "../actions/movies";
import store from "../store";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.handleReg = this.handleReg.bind(this);
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

  handleLog(e) {
    e.preventDefault();
    this.props.history.push("/api/login");
  }
  handleReg(e) {
    e.preventDefault();
    this.props.history.push("/api/register");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title :
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
          <button onClick={this.handleLog}>Log In</button>
          <button onClick={this.handleReg}>Register</button>
        </form>

        <SingleMovie />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    foundMovies: state
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: title => dispatch(fetchMovie(title))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
