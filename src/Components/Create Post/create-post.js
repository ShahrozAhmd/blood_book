import React from "react";
import react from "react";
import { Box, Paper } from "@material-ui/core";
import useStyles from "./create-post-styles";

const CreatePost = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems='center'>
      <Box className={classes.creatPostContainer}>
        <Paper elevation={3} />
      </Box>
    </Box>
  );
};

export default CreatePost;
