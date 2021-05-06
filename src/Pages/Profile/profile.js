import React from "react";
import useStyles from "./profile-styles";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import AccessibleIcon from "@material-ui/icons/Accessible";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonalProfile from "./PersonalProfile/personal-profile";

function Profile(props) {
  const classes = useStyles();
  return (
    <PersonalProfile />
    // <Box
    //   className={classes.root}
    //   display="flex"
    //   flexWrap="wrap"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Paper elevation={3} className={classes.card}>
    //     <Box className={classes.btnBox}>
    //       <PersonAddIcon />
    //       <Typography variant="p">General</Typography>
    //     </Box>
    //   </Paper>

    //   <Paper elevation={3} className={classes.card}>
    //     <Box className={classes.btnBox}>
    //       <AccessibleIcon />
    //       <Typography variant="p">Medical</Typography>
    //     </Box>
    //   </Paper>
    // </Box>
  );
}

export default Profile;
