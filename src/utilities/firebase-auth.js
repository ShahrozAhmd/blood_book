// import { firebaseAuth, provider } from "../config/firebase_config";

// var errorCode, errorMessage, confirm, data;
// // function for handling sigin with email and password
// export const emailSignInHandler = (email, password) => {
//   console.log(email,password) 
//   firebaseAuth
//     .signInWithEmailAndPassword(email, password)
//     .then((res) => {
//       confirm = true;
//       data = res.user;
//       console.log(confirm,data)
//     })
//     .catch((error) => {
//       console.log(error)
//       errorCode = error.code;
//       errorMessage = error.message;
//       confirm = false;
//       data = { errorCode, errorMessage };
//     });
//   return ({ confirm, data });
// };
// // function for handling sigup with email and password
// export const emailSignUpHandler = (email, password) => {
//   firebaseAuth
//     .createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       confirm = true;
//       data = res.user;
//     })
//     .catch((error) => {
//       errorCode = error.code;
//       errorMessage = error.message;
//       confirm = false;
//       data = { errorCode, errorMessage };
//     });
//   return { confirm, data };
// };

// // function for hadling signin with google
// export const googleSignInHandler = () => {
//   firebaseAuth
//     .signInWithPopup(provider)
//     .then((res) => {
//       confirm = true;
//       data = res.credential;
//     })
//     .catch((error) => {
//       errorCode = error.code;
//       errorMessage = error.message;
//       confirm = false;
//       data = { errorCode, errorMessage };
//     });

//     return { confirm, data };

// };
