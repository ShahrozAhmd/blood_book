import * as actionTypes from "../actions/action_types";
import { firebaseAuth, provider } from "../../config/firebase_config";

const initiaState = {
  authData: null,
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_WITH_EMAIL:
      // [START auth_signup_password]
      var user;

      firebaseAuth
        .createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
        .then((userCredential) => {
          // Signed in
          user = userCredential.data;
          console.log(user);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });

      // [END auth_signup_password]
      return { ...state, authData: user };
      break;
    case actionTypes.SIGN_IN_WITH_EMAIL:
      // [START auth_signin_password
      firebaseAuth
        .signInWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      // [END auth_signin_password]
      return { ...state, authData: user };
      break;

    case actionTypes.SIGN_IN_WITH_GOOGLE:
      firebaseAuth
        .signInWithPopup(provider)
        .then((res) => {
          var credentials = res.credential;
          var user = res.user;
          console.log(credentials, user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
