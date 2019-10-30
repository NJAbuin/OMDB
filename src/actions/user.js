import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "../constants";

export const loginUser = user => dispatch => {
  axios
    .post("/api/login", user)
    .then(res => res.data)
    .then(data => {
      console.log(data);
      dispatch({
        type: LOGIN_USER,
        payload: data
      });
    })
    .catch(err => console.log(err));
};

export const logoutUser = user => dispatch => {
  dispatch({
    type: LOGOUT_USER,
    payload: user
  });
};
