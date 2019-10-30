//CONSTANTS//
import { LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  username: "",
  isLogged: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload };
    case LOGOUT_USER:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export const isLogged = state => state.isLogged;
