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
import CancelIcon from "@material-ui/icons/Cancel";
import { RotateSpinner } from "react-spinners-kit";

const SearchResults = (props) => {
  const classes = useStyles();
  const search = useSelector((state) => state.searched);

  // const loader = <PushSpinner/>

  const notFound = (
    <div style={{ textAlign: "center" }}>
      <h2>
        <CancelIcon color="error" fontSize="large" />
        <br />
        Sorry!!! No Donor Is Available With This City And Blood Group
      </h2>
    </div>
  );

  const showOnNoResult =
    search.searchedResult != ""
      ? search.searchedResult.map((item) => {
          return (
            <div className={classes.root}>
              <Card elevation={3} className={classes.card} key={item}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="profile-picture"
                      className={classes.avatar}
                      src={
                        item.general.profileImage
                          ? item.general.profileImage
                          : "/static/images/avatar/1.jpg"
                      }
                    />
                  }
                  title={
                    item.general.name ? item.general.name : "Donor User Name"
                  }
                  subheader={item.bio.city ? item.bio.city : "Donor City"}
                />
                {/* 2nd row */}
                <Divider variant="middle" />
                <Box
                  display="flex"
                  justifyContent="space-around"
                  style={{ width: "100%", padding: "1%" }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <InvertColorsIcon
                        style={{ color: "red", display: "inline-block" }}
                      />
                      {item.donorForm.donorBloodGroup
                        ? item.donorForm.donorBloodGroup
                        : "Donor Blood Group"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <PermContactCalendarIcon
                        style={{ color: "red", display: "inline-block" }}
                      />
                      {item.personal.age
                        ? item.personal.age + " Years"
                        : "Donor Age"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <WcIcon
                        style={{ color: "red", display: "inline-block" }}
                      />
                      {item.personal.gender
                        ? item.personal.gender
                        : "Donor Gender"}
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <PhoneIcon
                        style={{ color: "red", display: "inline-block" }}
                      />
                      {item.bio.phoneNumber
                        ? item.bio.phoneNumber
                        : "Donor Phone Number"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <DraftsIcon
                        style={{ color: "red", display: "inline-block" }}
                      />
                      {item.bio.email ? item.bio.email : "Donor Email"}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </div>
          );
        })
      : notFound;

  return search.loading ? (
    <RotateSpinner size={45} color="#207398" loading />
  ) : (
    showOnNoResult
  );
};

export default SearchResults;
