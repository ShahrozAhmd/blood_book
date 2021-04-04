import React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./create-post-styles";

const CreatePost = () => {
  const classes = useStyles();

  return (
    <div className={classes.createpostbox}>
      <Paper elevation={3} />
    </div>
  );
};

export default CreatePost;
