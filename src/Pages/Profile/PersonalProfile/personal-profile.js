import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./personal-profile-styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ProgressCircle from "../../../UI/Progress Circle/progress-circle";
import ProfileImage from "../../../UI/ProfileImage/profile-image";
import InlineInfo from "../../../UI/InlineIconText/inline_icon_text";
import GoogleIcon from "@material-ui/icons/Google";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function PersonalProfile(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          {/* SECTION 01 STARTS HERE */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            style={{ border: "1px solid black", padding: "1%" }}
          >
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Box>
                <Typography style={{ fontSize: "0.8rem" }}>
                  Your Profile:
                </Typography>
              </Box>
              <Box>
                <ProgressCircle />
              </Box>
            </Box>
            <Box className={classes.el}>Three dots</Box>
          </Box>
          {/* SECTION 01 ENDS HERE */}

          {/* SECTION 02 STARTS HERE */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            style={{ border: "1px solid black", padding: "5%" }}
          >
            <Box
              style={{ border: "1px solid green", padding: "3%" }}
              flexGrow={1}
            >
              <ProfileImage />
              <br />
              First & Last Name
            </Box>
            <Box
              style={{ border: "1px solid red", padding: "3%" }}
              flexGrow={2}
            >
              <Box display="flex" justifyContent="space-around">
                <Box className={classes.el}>
                  <GoogleIcon />
                </Box>
                <Box className={classes.el}>
                  <FacebookIcon />
                </Box>
                <Box className={classes.el}>
                  <InstagramIcon />
                </Box>
                {/* <Box className={classes.el}>I4</Box> */}
              </Box>
            </Box>
          </Box>
          {/* SECTION 02 ENDS HERE */}

          {/* SECTION 03 STARTS HERE */}
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            alignContent="flex-start"
            alignSelf="center"
            style={{ border: "1px solid black" }}
          >
            <Box className={classes.el}>
              <InlineInfo icon="email" text="shahrozahmed286@gmail.com" />
            </Box>
            <Box className={classes.el}>
              <InlineInfo icon="phone" text="123456789" />
            </Box>
            <Box className={classes.el}>
              <InlineInfo icon="location" text="karachi" />
            </Box>
            <Box className={classes.el}>
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

          {/* SECTION 04 STARTS HERE */}
          <Box
            display="flex"
            flexWrap="wrap"
            style={{ border: "1px solid blue", padding: "3%" }}
          >
            <Box
              style={{ border: "1px solid red", padding: "3%", width: "50%" }}
            >
              <Box className={classes.el}>
                <InlineInfo icon="age" text="25" />
              </Box>
              <Box className={classes.el}>
                <InlineInfo icon="dob" text="October 22, 2021" />
              </Box>
              <Box className={classes.el}>
                <InlineInfo icon="gender" text="male" />
              </Box>
              <Box className={classes.el}>
                <InlineInfo icon="maritalstatus" text="single" />
              </Box>
            </Box>

            <Box
              style={{ border: "1px solid pink", padding: "3%", width: "50%" }}
            >
              <Box className={classes.el}>
                <InlineInfo icon="education" text="BSCS" />
              </Box>
              <Box className={classes.el}>
                <InlineInfo icon="profession" text="Web Developer" />
              </Box>
              <Box className={classes.el}>
                <InlineInfo icon="languages" text="English/ Urdu" />
              </Box>
            </Box>
          </Box>

          {/* SECTION 04 ENDS HERE */}
        </Paper>
      </Container>
    </Fragment>
  );
}

export default PersonalProfile;
