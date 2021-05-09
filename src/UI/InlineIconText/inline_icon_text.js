import { Box } from "@material-ui/core";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";

const setIcon = (args) => {
  switch (args) {
    case "email":
      return <EmailIcon />;
      break;
    case "phone":
      return <PhoneIcon />;
      break;

    case "location":
      return <LocationOnIcon />;
      break;
    case "about":
      return <InfoIcon />;
      break;
    default:
      return null;
  }
};

function InlineIconText(props) {
  return (
    <Box display="flex" justifyContent="flex-start">
      <Box style={{ padding: "1%" }}>{setIcon(props.icon)}</Box>

      <Box style={{ padding: "1%" }}>
        <Typography variant="body2">{props.text}</Typography>
      </Box>
    </Box>
  );
}

export default InlineIconText;
