import React, { Component } from "react";
import axios from "axios";
import SingleMovie from "../components/SingleMovie";

const omdb = "http://www.omdbapi.com/?apikey=45f5a1ca&";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", movies: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`${omdb}s=${this.state.title}`)
      .then(response => this.setState({ movies: response.data.Search }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title :
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>

        <SingleMovie movies={this.state.movies} />
      </div>
    );
  }
}
