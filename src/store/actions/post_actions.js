import * as actionType from "./action_types";
import { db } from "../../config/firebase_config";

const createPostInit = () => {
  return {
    type: actionType.CREATE_POST_INIT,
  };
};

const createPostSuccess = (res) => {
  return {
    type: actionType.CREATE_POST_SUCCESS,
    postData: res
  };
};
const createPostFailed = (err) => {
  return {
    type: actionType.CREATE_POST_FAILED,
    error: err
  };
};

const createPost = (data) => {
  return (dispatch) => {
    dispatch(createPostInit());
    // Add a new document with a generated id.
    db.collection("posts")
      .add(data)
      .then((docRef) => {
          dispatch(createPostSuccess(docRef))
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        dispatch(createPostFailed(error))
        console.error("Error adding document: ", error);
      });
  };
};

export{
    createPost,
}
