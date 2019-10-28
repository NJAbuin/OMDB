import { FETCH_MOVIES, SELECT_MOVIE } from "../actions/types";

const initialState = {
  foundMovies: [],
  selectedMovie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
