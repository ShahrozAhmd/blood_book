import CreatePost from "../../Components/Create Post/create-post-container";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import PostBox from "../../Components/Show Post/show-post-container";
import NearbyBox from "../../Components/Nearby/nearby-container";
import useStyles from "./dashboard-styles";
import { db, timeStamp } from "../../config/firebase_config";

function Dashboard(props) {
  const classes = useStyles();

  // useEffect(() => {
  //   db.collection("posts")
  //     .add({
  //       userName: "dummy name",
  //       userProfileId: 'dummy id',
  //       isDonorRequest: false,
  //       isReceiverRequest: false,
  //       amount : 0,
  //       bloodType:"A+",
  //       createdDate: timeStamp,
  //       deadline :"July 25, 2021 at 1:00:00 AM UTC+5",
  //       id: "007",
  //       isPaid :false,
  //       isUrgent :true,
  //       message:  "i need blood",
  //       noOfBottles : 5,
  //       media: {image: "url",video: "url",document:"url",location:"points"}
  //     })
  //     .then((res) => {
  //       console.log("Document written with ID: ", res);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={1}>
        <Header />

        <Container maxWidth="md">
          <Box display="flex" className={classes.main} justifyContent="center">
            {/* main */}
            <Box className={classes.mainFeed}  width="70%">
              <Box style={{ textAlign: "center" }}>
                <CreatePost />
              </Box>
              <Box >
                <PostBox />
              </Box>
            </Box>
            {/* Sidebar */}
            <Box className={classes.box} width="30%">
              <NearbyBox />
            </Box>
          </Box>
        </Container>
      </Container>
    </Fragment>
  );
}

export default Dashboard;
