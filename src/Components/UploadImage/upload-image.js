import React, { useEffect, useState } from "react";
import useStyles from "./upload-image-styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { uploadProfileImage } from "../../store/actions/profile_actions";
import { SwapSpinner } from "react-spinners-kit";
import SnackBar from "../SnackBar/snackbar";

const UploadImage = (props) => {
  let uid = localStorage.getItem("uid");
  const classes = useStyles();

  const state = useSelector((state) => state.profile);

  const [generalProfile, setGeneralProfile] = useState(
    state.profileData.general
  );

  console.log(generalProfile);

  const dispatch = useDispatch();
  // image will be set here on uploading:
  const [image, setImage] = useState(null);

  const [imageURL, setImageURL] = useState(null);
  const [getimageURL, setGetImageURL] = useState(false);

  const inputChangeHandler = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log("render");

    dispatch(uploadProfileImage(uid, image, generalProfile));
  };

  return state.isImageUploading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div>
        <SwapSpinner size={45} color="#207398" loading />
      </div>
    </div>
  ) : (
    <div style={{ width: "100%" }}>
      <input
        onChange={inputChangeHandler}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
      />
      <label style={{ width: "100%" }} htmlFor="contained-button-file">
        <Button fullWidth variant="contained" color="primary" component="span">
          Change Profile Image
        </Button>
      </label>
      {image ? (
        <Button
          disabled={!image ? true : false}
          onClick={handleUpload}
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "#4DD637",
            color: "white",
            marginTop: "3%",
          }}
          component="span"
        >
          Upload Profile Image
        </Button>
      ) : null}
    </div>
  );
};

export default UploadImage;
