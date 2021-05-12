import React from "react";
import ProfileEditForm from "../../Components/ProfileEditForm/profile-edit-form";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "./modal-styles";
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

function ModalPopup(props) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.modalpaper}>
            <ProfileEditForm />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DoneIcon />}
            >
              UPDATE
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalPopup;
