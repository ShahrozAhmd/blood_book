import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./personal-profile-styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

function PersonalProfile(props) {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    // </div>

    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
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
              Photo
            </Box>
            <Box
              style={{ border: "1px solid red", padding: "3%" }}
              flexGrow={2}
            >
              <Box display="flex" justifyContent="space-around">
                <Box className={classes.iconBox}>I1</Box>
                <Box className={classes.iconBox}>I2</Box>
                <Box className={classes.iconBox}>I3</Box>
                <Box className={classes.iconBox}>I4</Box>
              </Box>
            </Box>
          </Box>
          {/* SECTION 02 ENDS HERE */}

       

        </Paper>
      </Container>
    </Fragment>
  );
}

export default PersonalProfile;
