import React from "react";
import useStyles from "./profile-chip-styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Box, Button } from "@material-ui/core";

const ProfileChip = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
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
          title={props.hospital ? "Hospital Name" : "User Name"}
          subheader="Karachi, Pakistan"

        />
        
        {/* header section of post box ends here..*/}
        {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            One of my realtive is in danger and they need blood urgently, his
            blood group is rare and we have to face difficulties in arranging
            blood for him.
          </Typography>
        </CardContent> */}
        {/* Custom section 01 */}
        <CardActions>
          <Box display="flex" justifyContent="center" style={{ width: "100%" }}>
            {!props.hospital ? (
              <Box>
                <InvertColorsIcon style={{ color: "red" }} />
                <Typography variant="body2" color="textSecondary" component="p">
                  A+
                </Typography>
              </Box>
            ) : null}

            <Box>
              <Button color="primary">
                {props.hospital ? "Visit Site" : "Contact"}
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
export default ProfileChip;
