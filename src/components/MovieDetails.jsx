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
      <div>
        <h1>DETAILS:</h1>
        <p>
          Title: {this.state.movie.Title} <br />
          Released: {this.state.movie.Released} <br />
          Genre: {this.state.movie.Genre} <br />
          Director: {this.state.movie.Director}
          Actors:{this.state.movie.Actors}
          Country: {this.state.movie.Country}
          IMDB Rating: {this.state.movie.imdbRating}
          Metascore: {this.state.movie.Metascore} <br />
          Plot: {this.state.movie.Plot} <br />
        </p>
        <img src={this.state.movie.Poster} key={this.state.movie.imdbID} />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(MovieDetails);
