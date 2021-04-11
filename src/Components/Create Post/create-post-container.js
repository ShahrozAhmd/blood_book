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

const CreatePostContainer = (props) => {
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
                <Box>
                  <Typography
                    className={classes.postTexField}
                    variant="subtitle1"
                  >
                    Write your request post..
                  </Typography>
                </Box>
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
        <Box style={modalStyle} className={classes.paper}>
          <CreatePost />
        </Box>
      </Modal>
    </Fragment>
  );
};

export default CreatePostContainer;
