import * as actionTypes from "../actions/action_types";

import { useDispatch, useSelector } from "react-redux";

const initiaState = {
  profileData: null,
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMPTY_PROFILE_INIT:
      return { ...state };
      break;
    case actionTypes.SET_EMPTY_PROFILE_SUCCESS:
      return { ...state, profileData: action.profileData};
      break;
    case actionTypes.SET_EMPTY_PROFILE_FAILED:
      return { ...state, profileData: action.error };
      break;
      case actionTypes.LOAD_PROFILE_ON_SIGNIN_INIT:
      return { ...state };
      break;
      case actionTypes.LOAD_PROFILE_ON_SIGNIN_SUCCESS:
      return { ...state, profileData: action.profileData };
      break;
      case actionTypes.LOAD_PROFILE_ON_SIGNIN_FAILED:
      return { ...state, profileData: action.error };
      break;
      case actionTypes.LOAD_PROFILE_ON_REFRESH_INIT:
      return { ...state };
      break;
      case actionTypes.LOAD_PROFILE_ON_REFRESH_SUCCESS:
      return { ...state, profileData: action.profileData };
      break;
      case actionTypes.LOAD_PROFILE_ON_REFRESH_FAILED:
      return { ...state, profileData: action.error };
      break;
      case actionTypes.SET_PROFILE_REALTIME:
        return{...state, profileData: action.profileData}
        break;
      case actionTypes.VANISH_PROFILE_ON_SIGNOUT:
        return {profileData:null}
    default:
      return state;
  }
};

export default reducer;
