import React from "react";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import useStyles from "./search-results-styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Box, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
import Divider from "@material-ui/core/Divider";
import Chip from '@material-ui/core/Chip';
const SearchResults = (props) => {
  const classes = useStyles();

  // const searchResult =  useSelector(state => state.searched.searchedResult);
  const searchResult = [1, 2];

  const showOnNoResult = searchResult.map((item) => {
    return (
      <div className={classes.root}>
        <Card className={classes.card} key={item}>
          <CardHeader
            avatar={
              <Avatar aria-label="profile-picture" className={classes.avatar}>
                U
              </Avatar>
            }
            title={props.hospital ? "Hospital Name" : "User Name"}
            subheader="Karachi, Pakistan"
          />
          {/* 2nd row */}
          <Divider variant="middle" />
          <Box
            display="flex"
            justifyContent="space-around"
            style={{ width: "100%", padding: "1%" }}
          >
            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <InvertColorsIcon
                  style={{ color: "red", display: "inline-block" }}
                />
                A+
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <PermContactCalendarIcon
                  style={{ color: "red", display: "inline-block" }}
                />
                23 Years
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <WcIcon style={{ color: "red", display: "inline-block" }} />
                Male
              </Typography>
            </Box>
          </Box>
          <Divider variant="middle" />
          {/* 3rd row */}
          <Box
            display="flex"
            justifyContent="space-around"
            style={{ width: "100%", padding: "1%" }}
          >
            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <PhoneIcon style={{ color: "red", display: "inline-block" }} />
                03323142746
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="textSecondary" component="p">
                <DraftsIcon style={{ color: "red", display: "inline-block" }} />
                shahrozahmed286@gmail.com
              </Typography>
            </Box>
          </Box>
        </Card>
      </div>
    );
  });

  // const showOnResult;
  // const showOnError;

  return showOnNoResult;
  // <div>
  //    {searchResult.length == 0? <h1>null</h1>: <h3>no null</h3>}
  // </div>
};

export default SearchResults;
