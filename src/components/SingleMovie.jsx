import React from "react";
import { Link } from "react-router-dom";

export default function SingleMovie(props) {
  console.log(props.movies);
  const { movies } = props;
  return (
    <div>
      {movies.map(movie => (
        <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
          <img src={movie.Poster} key={movie.imdbID} />
        </Link>
      ))}
    </div>
  );
}
