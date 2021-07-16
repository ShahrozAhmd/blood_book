import * as actionType from "./action_types";
import { db } from "../../config/firebase_config";

const searchInit = () => {
  return {
    type: actionType.SEARCH_INIT,
  };
};

const searchSuccess = (result) => {
  return {
    type: actionType.SEARCH_SUCCESS,
    result: result,
  };
};

const searchFailed = (err) => {
  return {
    type: actionType.SEARCH_FAILED,
    error: err,
  };
};

const search = (bloodGroup, city) => {

  return (dispatch) => {
    dispatch(searchInit());
    db.collection("profiles")
    .where("donorForm.donorBloodGroup", "==", bloodGroup)
    .where("donorForm.city", "==", city)
      .get()
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          dispatch(searchSuccess(doc.data()))
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        dispatch(searchFailed(error))
        console.log("Error getting documents: ", error);
      });
  };
};

export { search };
