import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./eligibile -donor-styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DriveFileRenameOutlineIcon from "@material-ui/icons/DriveFileRenameOutline";
import Button from "@material-ui/core/Button";
import ModalPopup from "../../UI/Modal/modal";
import EligibileDonorForm from '../EligibileDonorForm/Eligibile-donor-form'

function EligableDonor(props) {
  const classes = useStyles();
  // code for modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              onClick={handleOpen}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DriveFileRenameOutlineIcon />}
            >
              Check Eligability
            </Button>
          </Box>
        </Box>
        <ModalPopup open={open} handleClose={handleClose}>
        <EligibileDonorForm/>
      </ModalPopup>
      </Paper>
     
    </div>
  );
}

export default EligableDonor;
