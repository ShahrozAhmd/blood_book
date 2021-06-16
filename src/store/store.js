import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth_reducer";

// const rootReducer = combineReducers({});

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
