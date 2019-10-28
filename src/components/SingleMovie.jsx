import React from "react";

export default function SingleMovie(props) {
  console.log(props.movies);
  const { movies } = props;
  return (
    <div>
      {movies.map(movie => (
        <img src={movie.Poster} key={movie.imdbID} />
      ))}
    </div>
  );
}
