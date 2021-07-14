import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./eligibile -donor-styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DriveFileRenameOutlineIcon from "@material-ui/icons/DriveFileRenameOutline";
import Button from "@material-ui/core/Button";
import ModalPopup from "../../UI/Modal/modal";
import EligibileDonorForm from "./EligibileDonorForm/Eligibile-donor-form";
import EligibileDonorResult from "../EligibilityResult/eligiblity-result";
import { useSelector } from "react-redux";

const EligableDonor = (props) => {
  const profile = useSelector((state) => state.profile.profileData);
  const classes = useStyles();
  // code for modal
  const [open, setOpen] = useState(false);
  // for donor eligiblity
  const [eligiblity, setEligiblity] = useState(false);
  const [eligResult, setEligResult] = useState(false);

  const isEligible = (result) => {
    setEligiblity(true);
    setEligResult(result);
  };
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
              Do You Wanna Be A Donor
            </Typography>
          </Box>
          <Box>
            <Button
              // disabled = {profile.donorForm.disease}
              onClick={handleOpen}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DriveFileRenameOutlineIcon />}
            >
              {eligiblity ? "Edit Eligibility" : "Check Eligibility"}
            </Button>
          </Box>
        </Box>
        {/* this modal here will popoup on click the button */}
        <ModalPopup open={open} handleClose={handleClose}>
          {eligiblity ? (
            <EligibileDonorResult result={eligResult} />
          ) : (
            <EligibileDonorForm isEligible={isEligible} />
          )}
        </ModalPopup>
      </Paper>
    </div>
  );
};

export default EligableDonor;
