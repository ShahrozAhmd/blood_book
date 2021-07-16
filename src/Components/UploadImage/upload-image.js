import React, { useEffect, useState } from "react";
import useStyles from "./upload-image-styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import { storage } from "../../config/firebase_config";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileData } from "../../store/actions/profile_actions";

const UploadImage = (props) => {
  let uid = localStorage.getItem("uid");
  const classes = useStyles();

  const state = useSelector((state) => state.profile.profileData);
  const [generalProfile, setGeneralProfile] = useState(state.general);
  console.log(generalProfile);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [getimageURL, setGetImageURL] = useState(false);

  const inputChangeHandler = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log("render");

    const uploadImage = storage.ref(`profileImages/${uid}`).put(image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("profileImages")
          .child(uid)
          .getDownloadURL()
          .then((url) => {
            setImageURL(url);
            if (imageURL != null) {
              setGeneralProfile({ ...generalProfile, profileImage: imageURL });
              dispatch(updateProfileData(uid, generalProfile, "general"));
              window.location.reload();
            }
          });
      }
    );
    window.location.reload();
  };

  // useEffect(() => {
  //   // if (generalProfile.profileImage === "") {
  //   //
  //   // }
  //   setGeneralProfile({ ...generalProfile, profileImage: imageURL });
  //   setTimeout(() => {
  //     dispatch(updateProfileData(uid, generalProfile, "general"));
  //   }, 5000);

  //   console.log(imageURL);
  // }, [imageURL]);
  return (
    <div style={{ width: "100%" }}>
      {/* {generalProfile.profileImage && <img width="32" height="32" src={imageURL}/>} */}
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
