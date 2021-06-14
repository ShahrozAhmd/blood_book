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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const ShowPost = (props) => {
  const classes = useStyles();
  //   states
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Fragment>
      <Box className={classes.root}>
        <Badge badgeContent={"urgent"} color="primary">
        <Card>
          {/* header section of post box */}
          <CardHeader
            avatar={
              <Avatar aria-label="profile-picture" className={classes.avatar}>
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
            title="User Name"
            subheader="September 14, 2016"
          />
          {/* header section of post box ends here..*/}
          {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            One of my realtive is in danger and they need blood urgently, his blood group 
            is rare and we have to face difficulties in arranging blood for him.
            </Typography>
          </CardContent>
          {/* Custom section 01 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="space-evenly"
              style={{ width: "100%" }}
            >
              <Box>
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
              </Box>
            </Box>
          </CardActions>

          {/* Custom section 02 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ width: "100%" }}
            >
              <Box style={{ display: "inline", margin: 0, padding: 0 }}>
                {/* <Typography>A+</Typography> */}
                <FaTint size={"1.7em"} style={{ color: "red" }} />
              </Box>
              <Box>
                <FaBong size={"1.7em"} style={{ color: "skyBlue" }} />
                {/* <Typography>A+</Typography> */}
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
                <CalendarTodayIcon/>
                <Typography>April,13</Typography>
              </Box>
              <Box>
                <LocalAtmIcon />
                <Typography>1000</Typography>
              </Box>
            </Box>
          </CardActions>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat.
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
        </Badge>
      </Box>

      <Box className={classes.root}>
        <Badge badgeContent={"urgent"} color="primary">
        <Card>
          {/* header section of post box */}
          <CardHeader
            avatar={
              <Avatar aria-label="profile-picture" className={classes.avatar}>
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
            title="User Name"
            subheader="September 14, 2016"
          />
          {/* header section of post box ends here..*/}
          {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            One of my realtive is in danger and they need blood urgently, his blood group 
            is rare and we have to face difficulties in arranging blood for him.
            </Typography>
          </CardContent>
          {/* Custom section 01 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="space-evenly"
              style={{ width: "100%" }}
            >
              <Box>
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
              </Box>
            </Box>
          </CardActions>

          {/* Custom section 02 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ width: "100%" }}
            >
              <Box style={{ display: "inline", margin: 0, padding: 0 }}>
                {/* <Typography>A+</Typography> */}
                <FaTint size={"1.7em"} style={{ color: "red" }} />
              </Box>
              <Box>
                <FaBong size={"1.7em"} style={{ color: "skyBlue" }} />
                {/* <Typography>A+</Typography> */}
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
                <CalendarTodayIcon/>
                <Typography>April,13</Typography>
              </Box>
              <Box>
                <LocalAtmIcon />
                <Typography>1000</Typography>
              </Box>
            </Box>
          </CardActions>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat.
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
        </Badge>
      </Box>

      <Box className={classes.root}>
        <Badge badgeContent={"urgent"} color="primary">
        <Card>
          {/* header section of post box */}
          <CardHeader
            avatar={
              <Avatar aria-label="profile-picture" className={classes.avatar}>
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
            title="User Name"
            subheader="September 14, 2016"
          />
          {/* header section of post box ends here..*/}
          {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            One of my realtive is in danger and they need blood urgently, his blood group 
            is rare and we have to face difficulties in arranging blood for him.
            </Typography>
          </CardContent>
          {/* Custom section 01 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="space-evenly"
              style={{ width: "100%" }}
            >
              <Box>
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
              </Box>
            </Box>
          </CardActions>

          {/* Custom section 02 */}
          <CardActions>
            <Box
              display="flex"
              justifyContent="flex-end"
              style={{ width: "100%" }}
            >
              <Box style={{ display: "inline", margin: 0, padding: 0 }}>
                {/* <Typography>A+</Typography> */}
                <FaTint size={"1.7em"} style={{ color: "red" }} />
              </Box>
              <Box>
                <FaBong size={"1.7em"} style={{ color: "skyBlue" }} />
                {/* <Typography>A+</Typography> */}
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
                <CalendarTodayIcon/>
                <Typography>April,13</Typography>
              </Box>
              <Box>
                <LocalAtmIcon />
                <Typography>1000</Typography>
              </Box>
            </Box>
          </CardActions>

          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat.
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
        </Badge>
      </Box>
    </Fragment>
  );
};

export default ShowPost;
