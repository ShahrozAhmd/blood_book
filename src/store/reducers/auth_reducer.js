import * as actionTypes from "../actions/action_types";

const initiaState = {
  authData: null,
  isSignUpLoading: false,
  isSignInLoading: false,
  isGoogleLoading: false,
  isSignUp: false,
  // isSignIn: false,
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_WITH_EMAIL_INIT:
      return { ...state, isSignUpLoading: true };
      break;
    case actionTypes.SIGN_UP_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
        authData: action.payload.data,
        isSignUp:true
      };
      break;
    case actionTypes.SIGN_UP_WITH_EMAIL_FAILED:
      return {
        ...state,
        isSignUpLoading: false,
        isSignUp:false
      };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_INIT:
      return { ...state, isSignInLoading: true };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isSignInLoading: false,
        authData: action.payload.data,
      };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_FAILED:
      return {
        ...state,
        isSignInLoading: false,
        authData: action.payload.data,
      };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_INIT:
      return { ...state, isGoogleLoading: true };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        isGoogleLoading: false,
        authData: action.payload.data,
      };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_FAILED:
      return {
        ...state,
        isGoogleLoading: false,
        authData: action.payload.data,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
