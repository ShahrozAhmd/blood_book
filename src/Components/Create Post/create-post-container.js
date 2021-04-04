import react, { Fragment, useState } from "react";
import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  TextField,
} from "@material-ui/core";
import useStyles from "./create-post-styles";
import Modal from "@material-ui/core/Modal";
import CreatePost from "./create-post";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//modal styling code
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CreatePostContainer = () => {
  const classes = useStyles();

  //modal working code
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className={classes.creatPostContainer}>
          <Card className={classes.root} onClick={handleOpen}>
            <CardActionArea>
              <CardContent>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    className={classes.postTexField}
                    id="standard-basic"
                    label="Create a blood request post"
                  />
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <CreatePost />
        </div>
      </Modal>
    </Fragment>
  );
};

export default CreatePostContainer;