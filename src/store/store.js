import {createStore, combineReducers } from "redux";
import authReducer from "./reducers/auth_reducer";

// const rootReducer = combineReducers({});
const store = createStore(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
