//CONSTANTS//
import { FETCH_MOVIES, SELECT_MOVIE } from "../constants";

const initialState = {
  foundMovies: [],
  selectedMovie: {}
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, foundMovies: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};

export const getMovies = state => state.foundMovies;
