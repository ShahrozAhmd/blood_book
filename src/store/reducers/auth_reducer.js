import * as actionTypes from "../actions/action_types";
import firebaseAuth from '../../app_config'

const initiaState = {
  authData: null,
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      // [START auth_signup_password]
      firebaseAuth
        .createUserWithEmailAndPassword(action.payload.email, action.payload.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      // [END auth_signup_password]
      return { ...state, authData: user};
      break;
    // case actionTypes.SIGNIN:
    //   return { ...state, value: state.value - 1 };
    //   break;
    default:
      return state;
  }
};

export default reducer;
