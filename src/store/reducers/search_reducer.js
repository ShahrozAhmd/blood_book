import * as actionTypes from "../actions/action_types";

const initialState = {
  searchedResult: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_INIT:
      return { ...state, loading: true };
      break;
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, loading: false, searchedResult: action.result };
      break;
    case actionTypes.SEARCH_FAILED:
      return { ...state, loading: false, searchedResult: action.error };
      break;
    default:
      return state;
  }
};

export default reducer;
