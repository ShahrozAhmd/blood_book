import * as actionTypes from "../actions/action_types";

const initiaState = {
  authData: null,
  isSignUpLoading: false,
  isSignInLoading: false,
  isGoogleLoading: false,
  isSignUp: false,
  isSignIn: false,
  isSignOut: false,
  error: false
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

        isSignUp: true,
      };
      break;
    case actionTypes.SIGN_UP_WITH_EMAIL_FAILED:
      return {
        ...state,
        isSignUpLoading: false,
        isSignUp: false,
      };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_INIT:
      return { ...state, isSignInLoading: true };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isSignInLoading: false,
        isSignIn: true,
        isSignUp:false
      };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL_FAILED:
      return {
        ...state,
        authData: action.payload.data,
        isSignInLoading: false,
        isSignIn: false,
        error: true
      };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_INIT:
      return { ...state, isGoogleLoading: true };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        isGoogleLoading: false,
        isSignIn: true,
      };
      break;
    case actionTypes.SIGN_IN_WITH_GOOGLE_FAILED:
      return {
        ...state,
        isGoogleLoading: false,
        isSignIn: false,
        authData: action.payload.data,
        error:true,
      };
      break;
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
        isSignInLoading: false,
        isGoogleLoading: false,
        isSignUp: false,
        isSignIn: false,
        isSignOut: true,
      };
    case actionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
      };
      break;
    case actionTypes.SET_AUTH_DATA:
      return {
        ...state,
        authData: action.payload.data,
      };
      break;

    default:
      return {...state};
  }
};

export default reducer;
