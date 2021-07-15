import * as actionTypes from "../actions/action_types";

const initialState = {
  posts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_POST_INIT:
      return { ...state };
      break;
    case actionTypes.CREATE_POST_SUCCESS:
      return { ...state, posts: action.postData };
      break;
    case actionTypes.CREATE_POST_FAILED:
      return { ...state,  posts: action.error};
      break;
    default:
      return state;
  }
};

export default reducer;
