import axios from "axios";
import { LOGIN_USER, LOGOUT_USER } from "../constants";

export const loginUser = user => dispatch => {
  axios
    .post("/api/login", user)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: LOGIN_USER,
        payload: data.username
      });
    })
    .catch(err => console.log(err));
};

export const logOutUser = () => dispatch => {
  axios.get("/api/logout").then(data => {
    dispatch({
      type: LOGOUT_USER
    });
  });
};
