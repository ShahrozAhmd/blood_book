import CreatePost from "../../Components/Create Post/create-post-container";
import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React, { Fragment } from "react";
import Header from "../../Components/Header/header";
import PostBox from "../../Components/Show Post/show-post-container";
import NearbyBox from '../../Components/Nearby/nearby-container'
import useStyles from "./dashboard-styles";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={1}>
        <Header />

        <Container maxWidth="md">
          <Box display="flex" className={classes.main} justifyContent="center">
            <Box className={classes.mainFeed} flexGrow={2}>
              <Box style = {{textAlign:"center"}}>
              <CreatePost />
              </Box>
              <Box>
                <PostBox />
              </Box>
            </Box>
            <Box className={classes.box} flexGrow={1}>
            <NearbyBox/>
            </Box>
          </Box>
        </Container>
      </Container>
    </Fragment>
  );
}

export default Dashboard;
