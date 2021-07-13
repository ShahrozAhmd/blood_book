import * as actionType from "./action_types";
import { db } from "../../config/firebase_config";

const setEmptyProfileInIt = (data) => {
  return {
    type: actionType.SET_EMPTY_PROFILE_INIT,
  };
};

const setEmptyProfileSuccess = (data) => {
  return {
    type: actionType.SET_EMPTY_PROFILE_SUCCESS,
    profileData: data,
  };
};

const setEmptyProfileFailed = (err) => {
  return {
    type: actionType.SET_EMPTY_PROFILE_FAILED,
    error: err,
  };
};

// if (authResponse.photoURL) {
//     console.log(authResponse.photoURL)

// }
const setEmptyProfileOnEmailSignUp = (authResponse, profileData) => {
  return (dispatch) => {
    dispatch(setEmptyProfileInIt());
    db.collection("profiles")
      .doc(authResponse.user.uid)
      .set(profileData)
      .then((docs) => {
        dispatch(setEmptyProfileSuccess(docs));
      })
      .catch((err) => {
        dispatch(setEmptyProfileFailed(err));
      });
  };
};

const setEmptyProfileOnGoogleSignin = (authResponse, profileData) => {
  const docRef = db.collection("profiles").doc(authResponse);
  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      return (dispatch) => {
        dispatch(setEmptyProfileInIt());
        db.collection("profiles")
          .doc(authResponse)
          .set(profileData)
          .then((docs) => {
            dispatch(setEmptyProfileSuccess(docs));
          })
          .catch((err) => {
            dispatch(setEmptyProfileFailed(err));
          });
      };
    }
  });
};

const loadProfileOnSignInInint = () => {
  return {
    type: actionType.LOAD_PROFILE_ON_SIGNIN_INIT,
  };
};

const loadProfileOnSignInSuccess = (data) => {
  return {
    type: actionType.LOAD_PROFILE_ON_SIGNIN_SUCCESS,
    profileData: data,
  };
};

const loadProfileOnSignInFailed = (err) => {
  return {
    type: actionType.LOAD_PROFILE_ON_SIGNIN_SUCCESS,
    error: err,
  };
};

const loadProfileOnSignIn = (authResponse) => {
  return (dispatch) => {
    dispatch(loadProfileOnSignInInint());
    const docRef = db.collection("profiles").doc(authResponse);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(loadProfileOnSignInSuccess(doc.data()));
        }
      })
      .catch((err) => {
        dispatch(loadProfileOnSignInFailed(err));
      });
  };
};

const setProfileRealTime = (data) => {
    return{
        type: actionType.SET_PROFILE_REALTIME,
        profileData: data
    }

}

const vanishProfileOnSignOut = () => {
  return {
    type: actionType.VANISH_PROFILE_ON_SIGNOUT,
  };
};

// ============================================

const loadProfileOnRefreshInit = () => {
    return {
      type: actionType.LOAD_PROFILE_ON_REFRESH_INIT,
    };
  };
  
  const loadProfileOnRefreshSuccess = (data) => {
    return {
      type: actionType.LOAD_PROFILE_ON_REFRESH_SUCCESS,
      profileData: data,
    };
  };
  
  const loadProfileOnRefreshFailed = (err) => {
    return {
        
      type: actionType.LOAD_PROFILE_ON_REFRESH_FAILED,
      error: err,
    };
  };
  
  const loadProfileOnRefresh = (authResponse) => {
    return (dispatch) => {
      dispatch(loadProfileOnRefreshInit());
      const docRef = db.collection("profiles").doc(authResponse);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch(loadProfileOnRefreshSuccess(doc.data()));
          }
        })
        .catch((err) => {
          dispatch(loadProfileOnRefreshFailed(err));
        });
    };
  };

export {
  setEmptyProfileOnEmailSignUp,
  setEmptyProfileOnGoogleSignin,
  loadProfileOnSignIn,
  vanishProfileOnSignOut,
  setProfileRealTime,
  loadProfileOnRefresh
};
