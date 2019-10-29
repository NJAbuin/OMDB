import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [createLogger(), thunkMiddleware];

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
