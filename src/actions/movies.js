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
