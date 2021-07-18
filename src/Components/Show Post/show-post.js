import React, { Fragment, useState } from "react";
import useStyles from "./show-post-styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Icon from "@material-ui/core/Icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { FaTint, FaBong } from "react-icons/fa";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { withStyles } from "@material-ui/core/styles";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DeleteIcon from "@material-ui/icons/Delete";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
import LocationCityIcon from '@material-ui/icons/LocationCity';

const ShowPost = (props) => {
  console.log(props.post);
  const classes = useStyles();
  //   states
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Fragment>
      <Box className={classes.root}>
        <Card>
          {/* header section of post box */}
          {/* urgent bar */}
          <Box
            className={
              props.post.isUrgent != false
                ? classes.urgentBarShow
                : classes.urgentBarHide
            }
          >
            <Typography variant="overline" display="block" gutterBottom>
              <DirectionsRunIcon />
              URGENTLY NEEDED
            </Typography>
          </Box>

          <CardHeader
            avatar={
              <Avatar
                src={
                  props.post.creatorProfileImage != null
                    ? props.post.creatorProfileImage
                    : "/static/images/avatar/1.jpg"
                }
                aria-label="profile-picture"
                className={classes.avatar}
              >
                U
              </Avatar>
            }
            //    action={
            //      <IconButton aria-label="settings">
            //        <MoreVertIcon />
            //      </IconButton>
            //   }
            //  action={
            //     <Typography variant="p">
            //         Karachi, Pakistan
            //     </Typography>
            //   }
            title={props.post.creatorUserName? props.post.creatorUserName: "User Name"}
            subheader={props.post.createdDate? props.post.createdDate.toDate().toString() :
            "Date"}
          />
          {/* header section of post box ends here..*/}

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.post.message}
            </Typography>
          </CardContent>

          {/* Custom section 01 */}

          <Box
            display="flex"
            justifyContent="space-evenly"
            style={{ width: "100%" }}
          >
            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <PhoneIcon
                  style={{ color: "red", display: "inline-block" }}
                />
              {props.post.creatorPhoneNumber?props.post.creatorPhoneNumber: "Phone Number" }
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <LocationCityIcon
                  style={{ color: "red", display: "inline-block" }}
                />
                {props.post.creatorCity?props.post.creatorCity: "Location" }
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <DraftsIcon style={{ color: "red", display: "inline-block" }} />
                {props.post.creatorEmail?props.post.creatorEmail: "Email" }
              </Typography>
            </Box>
          </Box>
          {/* <Box>
                <p>Attached:</p>
              </Box>
              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <ImageIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <VideocamIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <DescriptionIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PersonPinCircleIcon />
                </IconButton>
              </Box> */}
          {/* </Box> */}

          {/* Custom section 02 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ width: "100%" }}
            >
              <Box style={{ display: "inline", margin: 0, padding: 0 }}>
                <Typography>
                  {props.post.bloodGroup != null
                    ? props.post.bloodGroup
                    : "Blood Group"}
                </Typography>
                <FaTint size={"1.7em"} style={{ color: "red" }} />
              </Box>
              <Box>
                <FaBong size={"1.7em"} style={{ color: "skyBlue" }} />
                <Typography>
                  {props.post.noOfBottles != null
                    ? props.post.noOfBottles
                    : "Blood Bottles"}
                </Typography>
              </Box>
            </Box>
          </CardActions>
          {/* Custom section 03 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="space-between"
              style={{ width: "100%" }}
            >
              <Box>
                <CalendarTodayIcon />
                <Typography>{props.post.deadline}</Typography>
              </Box>
              <Box>
                <LocalAtmIcon />
                <Typography>{props.post.amount}</Typography>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Fragment>
  );
};

export default ShowPost;
