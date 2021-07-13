import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth_reducer";
import profileReducer from "./reducers/profile_reducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
