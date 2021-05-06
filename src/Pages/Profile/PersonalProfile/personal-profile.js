import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./personal-profile-styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

function PersonalProfile(props) {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    // </div>

    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" className = {classes.container} >
        <Paper elevation={3} className={classes.paper}/>
      </Container>
    </Fragment>
  );
}

export default PersonalProfile;
