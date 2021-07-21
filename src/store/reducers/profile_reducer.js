import * as actionTypes from "../actions/action_types";
import { useDispatch, useSelector } from "react-redux";

const initiaState = {
  profileData: null,

  isImageUploading: false,
  isImageUploaded: false,
  isErrorInImageUploading: false,

  successMessage: false,
  errorMessage: false,
  isProfileDataUpdated : false,
  isProfileDataUpdating: false,
  hasErrorInUpdatingProfileData: false,

};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMPTY_PROFILE_INIT:
      return { ...state };
      break;
    case actionTypes.SET_EMPTY_PROFILE_SUCCESS:
      return { ...state, profileData: action.profileData };
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
      return { ...state, profileData: action.profileData };
      break;
    case actionTypes.VANISH_PROFILE_ON_SIGNOUT:
      return { profileData: null };

      
    case actionTypes.UPLOAD_PROFILE_IMAGE_INIT:
      return { ...state, isImageUploading: true };
    case actionTypes.UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        isImageUploading: false,
        isImageUploaded: true,
        successMessage: action.successMessage,
      };
    case actionTypes.UPLOAD_PROFILE_IMAGE_FAILED:
      return {
        ...state,
        isImageUploading: false,
        isImageUploaded: false,
        isErrorInImageUploading: true,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
