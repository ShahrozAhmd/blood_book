import React from "react";
import useStyles from "./show-post-styles";
import ShowPost from "./show-post";

const ShowPostContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <ShowPost />
    </div>
  );
};

export default ShowPostContainer;
