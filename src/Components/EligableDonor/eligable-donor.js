import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./eligable-donor-styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DriveFileRenameOutlineIcon from "@material-ui/icons/DriveFileRenameOutline";
import Button from "@material-ui/core/Button";

function EligableDonor(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              className={classes.button}
              variant="button"
              display="block"
              gutterBottom
            >
              Take your Donor Eligability Test
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DriveFileRenameOutlineIcon />}
            >
              Check Eligability
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default EligableDonor;
