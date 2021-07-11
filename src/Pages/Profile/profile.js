import React, { Fragment, useState, useEffect } from "react";
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
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import ProfileEditForm from "../../Components/ProfileEditForm/profile-edit-form";
import { useRef } from "react";

function Profile(props) {
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
    setOpen(false);
    setWhichToEdit(null);
  };

  return (
    <Fragment>
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
            <Box style={{ padding: "2%" }}>
              <ProfileImage />
              <br />
              <Typography variant="h6" gutterBottom>
                USER NAME
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
              <InlineInfo icon="email" text="shahrozahmed286@gmail.com" />
            </Box>
            <Box>
              <InlineInfo icon="phone" text="123456789" />
            </Box>
            <Box>
              <InlineInfo icon="location" text="karachi" />
            </Box>
            <Box>
              <InlineInfo
                icon="about"
                text="Detailed-oriented, responsible, and committed Web Developer, with a get-it-done, 
                on-time, and high-quality product spirit, and more than 3 years of experience defining 
                requirements, designing, implementing, testing, and delivering versatile websites using
                 various programming languages and technologies."
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
                <InlineInfo icon="age" text="25" />
              </Box>
              <Box>
                <InlineInfo icon="dob" text="October 22, 2021" />
              </Box>
              <Box>
                <InlineInfo icon="gender" text="male" />
              </Box>
              <Box>
                <InlineInfo icon="maritalstatus" text="single" />
              </Box>
              <Box>
                <InlineInfo icon="bloodgroup" text="A+" />
              </Box>
            </Box>
            {/* <<Professional>> SECTION 04a STARTS HERE */}
            <Box style={{ width: "50%" }}>
              <Typography variant="h6" gutterBottom>
                PROFESSIONAL:
              </Typography>
              <ProfileEditButton name="professional" clicked={handleOpen} />
              <Box>
                <InlineInfo icon="education" text="BSCS" />
              </Box>
              <Box>
                <InlineInfo icon="profession" text="Web Developer" />
              </Box>
              <Box>
                <InlineInfo icon="languages" text="English/ Urdu" />
              </Box>
            </Box>
            {/* <<Professional>> SECTION 04a ENDS  HERE */}
          </Box>

          {/* SECTION 04 ENDS HERE */}
        </Paper>

        {/* Donor availability row code */}
        <CheckDonorEligibility />
      </Container>

      {/* modal rendering code execute on state change*/}
      <ModalPopup open={open} handleClose={handleClose}>
        {/* children for modal , specific for form section data updation */}
        <ProfileEditForm toEdit={whichToEdit} />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DoneIcon />}
        >
          UPDATE
        </Button>
      </ModalPopup>
    </Fragment>
  );
}

export default Profile;
