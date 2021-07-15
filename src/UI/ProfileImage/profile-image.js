import React from "react";
import useStyles from './profile-image-styles'
import Avatar from "@material-ui/core/Avatar";



export default function ImageAvatars(props) {
  const classes = useStyles();
  
    console.log(props.image)
  return ( 
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src={props.image? props.image: "/static/images/avatar/1.jpg"}
        className={classes.large}
      />
    </div>
  );
}
