import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useStyles from "./create-post-styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import DescriptionIcon from "@material-ui/icons/Description";
import VideocamIcon from "@material-ui/icons/Videocam";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import { Box } from "@material-ui/core";

const CreatePost = () => {
  const classes = useStyles();

  return (
    <div className={classes.createpostbox}>
      <Paper elevation={3}>
        <form className={classes.writepost} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Write your request post..."
            variant="outlined"
          />

          <Box display="flex" justifyContent="space-evenly">
            <Box>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <VideocamIcon />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="video/*"
                className={classes.input}
                id="video-icon"
                type="file"
              />
              <label htmlFor="video-icon">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <DescriptionIcon />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="video/*"
                className={classes.input}
                id="video-icon"
                type="file"
              />
              <label htmlFor="video-icon">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddLocationIcon />
                </IconButton>
              </label>
            </Box>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default CreatePost;
