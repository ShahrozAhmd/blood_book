import React, { Fragment, useState, useEffect, useRef } from "react";
import useStyles from "./profile-styles";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ProfileImage from "../../UI/ProfileImage/profile-image";
import InlineInfo from "../../UI/InlineIconText/inline_icon_text";
import ProfileEditButton from "../../UI/ProfileEditButton/profile-edit-button";
import ModalPopup from "../../UI/Modal/modal";
import CheckDonorEligibility from "../../Components/EligibileDonor/eligibile -donor";
import GoogleIcon from "@material-ui/icons/Google";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProfileEditForm from "../../Components/ProfileEditForm/profile-edit-form";
import { useSelector, useDispatch } from "react-redux";
import {db} from '../../config/firebase_config'
import {setProfileRealTime} from '../../store/actions/profile_actions'
function Profile(props) {

  const dispatch = useDispatch();
 
  // states get from global store:
  const profile = useSelector((state) => state.profile.profileData);
  
  const auth = useSelector((state) => state.authentication.authData);
  console.log(profile);
  const classes = useStyles();
  // code for modal
  const [open, setOpen] = useState(false);
  // UI level states to make clear that on which section user click to edit in his profile
  const [whichToEdit, setWhichToEdit] = useState(null);

  const handleOpen = (arg) => {
    setOpen(true);
    setWhichToEdit(arg);
  };

  const handleClose = () => {
    setWhichToEdit(null);
    setOpen(false);
  };

 
  return (
   profile && <Fragment>
    <CssBaseline />
    <Container maxWidth="md" className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        {/* SECTION 01 STARTS HERE */}
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {/* <Box style={{ padding: "5px" }}>
              <Typography style={{ fontSize: "0.8rem" }}>
                Your Profile:
              </Typography>
            </Box>
            <Box>
              <ProgressCircle />
            </Box> */}
          </Box>
          {/*
          This is commented for now , it is the 3 dots setting option
          <Box className={classes.el}>
            <IconButton color="secondary" aria-label="add an alarm">
              <MoreVertIcon onClick={handleOpen} />
            </IconButton>
          </Box> */}
        </Box>
        {/* SECTION 01 ENDS HERE */}

        {/* <<General>> SECTION 02 STARTS HERE */}
        <Box display="flex" flexDirection="column" flexWrap="wrap">
          <ProfileEditButton name="general" clicked={handleOpen} />
          <Box style={{ padding: "2%" }}>
            <ProfileImage  />
            <br />
            <Typography variant="h6" gutterBottom>
              {profile.general.name ? profile.general.name : "Your Name"}
            </Typography>
          </Box>

          {/* Social icons, thori dair k liye side kiya hai isko */}
          {/* <Box>
            <Box display="flex" justifyContent="flex-start">
              <Box>
                <GoogleIcon />
              </Box>
              <Box>
                <FacebookIcon />
              </Box>
              <Box>
                <InstagramIcon />
              </Box>
            </Box>
          </Box> */}
        </Box>
        {/* SECTION 02 ENDS HERE */}

        {/*<<Bio>> SECTION 03 STARTS HERE */}
        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          alignContent="flex-start"
          alignSelf="center"
          style={{ padding: "2%" }}
        >
          {/* button to edit a specific profile section */}
          <ProfileEditButton name="bio" clicked={handleOpen} />

          <Box>
            <InlineInfo
              icon="email"
              text={
                profile.bio.email[0]
                  ? profile.bio.email[0]
                  : "Your Email Here"
              }
            />
          </Box>
          <Box>
            <InlineInfo
              icon="phone"
              text={
                profile.bio.phoneNumber[0]
                  ? profile.bio.phoneNumber[0]
                  : "Your Phone Number"
              }
            />
          </Box>
          <Box>
            <InlineInfo
              icon="location"
              text={profile.bio.city[0] ? profile.bio.city[0] : "Your City"}
            />
          </Box>
          <Box>
            <InlineInfo
              icon="about"
              text={
                profile.bio.shortIntro
                  ? profile.bio.shortIntro
                  : "Your Short Intro"
              }
            />
          </Box>
        </Box>
        {/* SECTION 03 ENDS HERE */}

        {/* <<Personal>> SECTION 04 STARTS HERE */}
        <Box display="flex" flexWrap="wrap" style={{ padding: "2%" }}>
          <Box style={{ width: "50%" }}>
            <Typography variant="h6" gutterBottom>
              PERSONAL:
            </Typography>
            <ProfileEditButton name="personal" clicked={handleOpen} />
            <Box>
              <InlineInfo icon="age" text={
                profile.personal.age[0]
                  ? profile.personal.age[0]
                  : "Your Age"
              } />
            </Box>
            {/* <Box>
              <InlineInfo icon="dob" text="October 22, 2021" />
            </Box> */}
            <Box>
              <InlineInfo icon="gender" text={
                profile.personal.gender
                  ? profile.personal.gender
                  : "Your Gender"
              } />
            </Box>
            <Box>
              <InlineInfo icon="maritalstatus" text={
                profile.personal.maritalStatus
                  ? profile.personal.maritalStatus
                  : "Marital Status"
              } />
            </Box>
            <Box>
              <InlineInfo icon="bloodgroup" text={
                profile.personal.bloodGroup
                  ? profile.personal.bloodGroup
                  : "Blood Group"
              } />
            </Box>
          </Box>
          {/* <<Professional>> SECTION 04a STARTS HERE */}
          <Box style={{ width: "50%" }}>
            <Typography variant="h6" gutterBottom>
              PROFESSIONAL:
            </Typography>
            <ProfileEditButton name="professional" clicked={handleOpen} />
            <Box>
              <InlineInfo icon="education" text={
                profile.professional.education
                  ? profile.professional.education
                  : "Your Education"
              } />
            </Box>
            <Box>
              <InlineInfo icon="profession" text={
                profile.professional.occupation
                  ? profile.professional.occupation
                  : "Your Occupation"
              } />
            </Box>
            <Box>
              <InlineInfo icon="languages" text={
                profile.professional.languages
                  ? profile.professional.languages.join()
                  : "Languages"
              } />
            </Box>
          </Box>
          {/* <<Professional>> SECTION 04a ENDS  HERE */}
        </Box>

        {/* SECTION 04 ENDS HERE */}
      </Paper>

      {/* Donor availability row code */}
      <CheckDonorEligibility donor = {profile.donorForm}/>
    </Container>

    {/* modal rendering code execute on state change*/}
    <ModalPopup open={open} handleClose={handleClose}>
      {/* children for modal , specific for form section data updation */}
      <ProfileEditForm toEdit={whichToEdit} />
    </ModalPopup>
  </Fragment>
  
  );
}

export default Profile;
