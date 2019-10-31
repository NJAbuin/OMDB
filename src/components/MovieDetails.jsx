import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";
import { omdb } from "../constants";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
    this.id = props.match.params.movieID;
  }

  componentWillMount() {
    axios.get(`${omdb}i=${this.id}`).then(response => {
      this.setState({ movie: response.data });
      console.log(this.state.movie);
    });
  }

  render() {
    return (
      <div style={style}>
        <h1 style={centerText}>DETAILS:</h1>
        <hr />
        <hr />
        <p>
          Title: {this.state.movie.Title} <br />
          <br />
          Released: {this.state.movie.Released} <br />
          <br />
          Genre: {this.state.movie.Genre} <br />
          <br />
          Director: {this.state.movie.Director} <br />
          <br />
          Actors:{this.state.movie.Actors} <br />
          <br />
          Country: {this.state.movie.Country} <br />
          <br />
          IMDB Rating: {this.state.movie.imdbRating} <br />
          <br />
          Metascore: {this.state.movie.Metascore} <br />
          <br />
          Plot: {this.state.movie.Plot} <br />
          <br />
        </p>
        <hr />
        <br />
        <img
          style={centerImg}
          src={this.state.movie.Poster}
          key={this.state.movie.imdbID}
        />
      </div>
    );
  }
}

const centerText = {
  textAlign: "center",
  border: "3px solid gold"
};

const centerImg = {
  display: " block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%"
};

const style = {
  backgroundColor: "black",
  color: "white",
  margin: "auto",
  width: "75%",
  border: "3px solid gold",
  padding: "10px"
};

export default connect(
  null,
  null
)(MovieDetails);
