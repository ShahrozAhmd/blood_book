import { Box, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./nearby-styles";
import ProfileChip from "../Profile Chip/profile-chip";

const Nearby = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="button" style={{ textAlign: "center" }}>
          Nearby Donors/Receivers
        </Typography>
        <Box>
          <Paper elevation={3} className={classes.root}>
            <ProfileChip />
          </Paper>
        </Box>
        <Typography variant="button" style={{ textAlign: "center" }}>
          Nearby Hospitals
        </Typography>
        <Box>
          <Paper elevation={3} className={classes.root}>
            <ProfileChip hospital />
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Nearby;
