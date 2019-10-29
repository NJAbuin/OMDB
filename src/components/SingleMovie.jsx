import React from "react";
import { Link } from "react-router-dom";
import store from "../store";
import { connect } from "react-redux";

function SingleMovie(props) {
  const foundMovies = props.foundMovies.movies.foundMovies;
  console.log(foundMovies);
  return (
    <div>
      {foundMovies.data &&
        foundMovies.data.Search.map(movie => (
          <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
            <img src={movie.Poster} key={movie.imdbID} />
          </Link>
        ))}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    foundMovies: state
  };
};

export default connect(
  mapStateToProps,
  null
)(SingleMovie);
