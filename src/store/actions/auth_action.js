import * as actionType from "./action_types";
import { firebaseAuth, provider } from "../../config/firebase_config";

// SignIn with email actions
const signInWithEmailInit = () => {
  return {
    type: actionType.SIGN_IN_WITH_EMAIL_INIT,
  };
};

const signInWithEmailSuccess = (data) => {
  return {
    type: actionType.SIGN_IN_WITH_EMAIL_SUCCESS,
    payload: {
      data: data,
    },
  };
};

const signInWithEmailFailed = (data) => {
  return {
    type: actionType.SIGN_IN_WITH_EMAIL_FAILED,
    payload: {
      data: data,
    },
  };
};

const signInWithEmail = (email, password) => {
  return (dispatch) => {
    dispatch(signInWithEmailInit());
    // code for auth from firebase:
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(signInWithEmailSuccess(res.user));
      })
      .catch((error) => {
        dispatch(signInWithEmailFailed(error.message));
      });
  };
};

// Signup with email actions

const signUpWithEmailInit = () => ({
  type: actionType.SIGN_UP_WITH_EMAIL_INIT,
  payload: {},
});

const signUpWithEmailSuccess = (data) => {
  return {
    type: actionType.SIGN_UP_WITH_EMAIL_SUCCESS,
    payload: {
      data: data,
    },
  };
};

const signUpWithEmailFailed = () => {
  return {
    type: actionType.SIGN_UP_WITH_EMAIL_FAILED,
    payload: {},
  };
};

const signUpWithEmail = (email, password) => {
  return (dispatch) => {
    dispatch(signUpWithEmailInit());
    // code for auth from firebase:
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(signUpWithEmailSuccess(res.user));
      })
      .catch((error) => {
        dispatch(signUpWithEmailFailed(error.message));
      });
  };
};

// // Signin with google actions

const signInWithGoogleInit = () => {
  return {
    type: actionType.SIGN_IN_WITH_GOOGLE_INIT,
  };
};

const signInWithGoogleSuccess = (data) => {
  return {
    type: actionType.SIGN_IN_WITH_GOOGLE_SUCCESS,
    payload: {
      data: data,
    },
  };
};

const signInWithGoogleFailed = (data) => {
  return {
    type: actionType.SIGN_IN_WITH_GOOGLE_FAILED,
    payload: {
      data: data,
    },
  };
};

const signInWithGoogle = () => {
  return (dispatch) => {
    dispatch(signInWithGoogleInit());
    firebaseAuth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(signInWithGoogleSuccess(res.credential));
      })
      .catch((error) => {
        dispatch(signInWithGoogleFailed(error.message));
      });
  };
};

export { signInWithEmail, signUpWithEmail, signInWithGoogle };
