import axios from "axios";
import { omdb, FETCH_MOVIES, SELECT_MOVIE } from "../constants";

export const fetchMovie = title => dispatch => {
  console.log("fetching");
  axios.get(`${omdb}s=${title}`).then(response =>
    dispatch({
      type: FETCH_MOVIES,
      payload: response
    })
  );
};

export const selectMovie = id => dispatch => {
  console.log("fetching");
  axios.get(`${omdb}i=${id}`).then(response =>
    dispatch({
      type: SELECT_MOVIE,
      payload: response
    })
  );
};
