import React from "react";
import useStyles from './profile-image-styles'
import Avatar from "@material-ui/core/Avatar";



export default function ImageAvatars() {
  const classes = useStyles();

  return ( 
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.large}
      />
    </div>
  );
}
