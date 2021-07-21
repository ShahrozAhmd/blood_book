import * as actionType from "./action_types";
import { db, storage } from "../../config/firebase_config";

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

// this action is basically listen the changes in our firestore made by our user and
// the populate our redux store with it .

const setProfileRealTime = (data) => {
  return {
    type: actionType.SET_PROFILE_REALTIME,
    profileData: data,
  };
};
// ==================================================================================
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
// ==========================================================
const updateProfileDataInit = () => {
  return {
    type: actionType.UPDATE_PROFILE_DATA_INIT,
  };
};

const updateProfileDataSuccess = (data) => {
  return {
    type: actionType.UPDATE_PROFILE_DATA_SUCCESS,
    data: data,
  };
};

const updateProfileDataFailed = (err) => {
  return {
    type: actionType.UPDATE_PROFILE_DATA_SUCCESS,
    error: err,
  };
};

const updateProfileData = (uid, data, chunk) => {
  return (dispatch) => {
    dispatch(updateProfileDataInit());
    const getWholeProfile = db.collection("profiles").doc(uid);
    getWholeProfile
      .update({ [`${chunk}`]: data })
      .then((res) => {
        console.log("Document successfully updated!");
        dispatch(updateProfileDataSuccess(res));
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        dispatch(updateProfileDataFailed(error));
      });
  };
};

// actions for profile image uploading:

const uploadProfileImageInit = () => {
  return {
    type: actionType.UPLOAD_PROFILE_IMAGE_INIT,
  };
};

const uploadProfileImageSuccess = (data) => {
  return {
    type: actionType.UPLOAD_PROFILE_IMAGE_SUCCESS,
    data: data,
    successMessage : "Image has been changed Successfully!"
  };
};

const uploadProfileImageFailed = (err) => {
  return {
    type: actionType.UPLOAD_PROFILE_IMAGE_FAILED,
    errorMessage: err,
  };
};

const uploadProfileImage = (uid, image, state) => {
  return (dispatch) => {
    dispatch(uploadProfileImageInit());
    const uploadImage = storage.ref(`profileImages/${uid}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        // console.log("its Error :",error , "Its Error Message: ",error.message)
        dispatch(uploadProfileImageFailed(error.message));
      },
      () => {
        storage
          .ref("profileImages")
          .child(uid)
          .getDownloadURL()
          .then((url) => {
            const genProfile = { ...state, profileImage: url };

            dispatch(updateProfileData(uid, genProfile, "general"));
            dispatch(uploadProfileImageSuccess(url));
          });
      }
    )
  };
};

export {
  setEmptyProfileOnEmailSignUp,
  setEmptyProfileOnGoogleSignin,
  loadProfileOnSignIn,
  vanishProfileOnSignOut,
  setProfileRealTime,
  loadProfileOnRefresh,
  updateProfileData,
  uploadProfileImage,
};
