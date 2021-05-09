import React from "react";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InfoIcon from "@material-ui/icons/Info";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GroupIcon from "@material-ui/icons/Group";
import WcIcon from "@material-ui/icons/Wc";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import WorkIcon from "@material-ui/icons/Work";
import TranslateIcon from "@material-ui/icons/Translate";

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
    case "age":
      return <PermIdentityIcon />;
      break;
    case "dob":
      return <CalendarTodayIcon />;
      break;
    case "maritalstatus":
      return <GroupIcon />;
      break;
    case "gender":
      return <WcIcon />;
      break;
    case "education":
      return <CastForEducationIcon />;
      break;
    case "languages":
      return <TranslateIcon />;
      break;
    case "profession":
      return <WorkIcon />;
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
