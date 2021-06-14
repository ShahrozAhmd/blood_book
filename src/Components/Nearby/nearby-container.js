import React from "react";
import Nearby from "./nearby";
import useStyles from "./nearby-styles";

const NearbyContainer = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Nearby />
    </div>
  );
};

export default NearbyContainer;
