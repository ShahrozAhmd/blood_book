import * as actionType from "./action_types";
import { firebaseAuth, provider } from "../../config/firebase_config";
import {
  setEmptyProfileOnEmailSignUp,
  setEmptyProfileOnGoogleSignin,
  loadProfileOnSignIn,
  vanishProfileOnSignOut
} from "./profile_actions";

var obj = {
  general: {
    profileImage: null,
    name: null,
  },
  bio: {
    email: null,
    phoneNumber: null,
    city: null,
    shortIntro: null,
  },
  personal: {
    age: null,
    gender: null,
    maritalStatus: null,
    bloodGroup: null,
  },
  professional: {
    education: null,
    occupation: null,
    languages: [null, null],
  },
  donorForm: {
    wannaBeDonor: false,
    city: null,
    disease: true,
    donorBloodGroup: null,
  },
};
// var obj = {
//   general: {
//     profileImage: "string(url)",
//     name: "string",
//   },
//   bio: {
//     email: "string",
//     phoneNumber: "string",
//     city: "string",
//     shortIntro: "string",
//   },
//   personal: {
//     age: 22,
//     gender: "string",
//     maritalStatus: "string",
//     bloodGroup: "string",
//   },
//   professional: {
//     education: "string",
//     occupation: "string",
//     languages: ["string1", "string2"],
//   },
//   donorForm: {
//     wannaBeDonor: false,
//     city: "string",
//     disease: true,
//     donorBloodGroup: "string",
//   },
// };

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

const signInWithEmail = (email, password, history) => {
  return (dispatch) => {
    dispatch(signInWithEmailInit());
    // code for auth from firebase:
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(signInWithEmailSuccess(res.user));
        localStorage.setItem("uid", res.user.uid);
        dispatch(loadProfileOnSignIn(res.user.uid))
        history.push("/profile");
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
    // payload: {
    //   data: data,
    // },
  };
};

const signUpWithEmailFailed = () => {
  return {
    type: actionType.SIGN_UP_WITH_EMAIL_FAILED,
    payload: {},
  };
};

const signUpWithEmail = (email, password, history) => {
  return (dispatch) => {
    dispatch(signUpWithEmailInit());
    // code for auth from firebase:
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(signUpWithEmailSuccess());
        dispatch(setEmptyProfileOnEmailSignUp(res, obj));
      })
      .catch((error) => {
        dispatch(signUpWithEmailFailed(error.message));
      });
  };
};

// Signin with google actions

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
        dispatch(setEmptyProfileOnGoogleSignin(res.user.uid, obj));
        dispatch(loadProfileOnSignIn(res.user.uid))
      })
      .catch((error) => {
        dispatch(signInWithGoogleFailed(error.message));
      });
  };
};

// Signout actions
const signOutSuccess = (data) => {
  return {
    type: actionType.SIGN_OUT_SUCCESS,
    payload: {
      data: data,
    },
  };
};

const signOutFailed = (data) => {
  return {
    type: actionType.SIGN_OUT_FAILED,
    payload: {
      data: data,
    },
  };
};
// firebase provided function to check that the user is login or  logout

const authStateObserver = (user) => {
  return {
    type: actionType.SET_AUTH_DATA,
    payload: {
      data: user,
    },
  };
};
// Signout all users, email and google both
const signOut = () => {
  return (dispatch) => {
    firebaseAuth
      .signOut()
      .then((res) => {
        dispatch(vanishProfileOnSignOut());
        dispatch(signOutSuccess(res));
        localStorage.removeItem("uid");
        console.log(res);
      })
      .catch((error) => {
        dispatch(signOutFailed(error));
        console.log(error);
      });
  };
};

export {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  authStateObserver,
  signOut,
};
