import React, { Fragment } from "react";
// import classes from "./landing.module.css";
import SignIn from "../../Components/SignIn/signin-form";
import Container from "@material-ui/core/Container";
import Search from "@material-ui/icons/Search";
import logoImage from "../../assets/logo.png";
import drImage from "../../assets/dr.png";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CssBaseline,
  Typography,
  Grid,
  Paper,
  Button,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    backgroundColor: "white",
  },
  btn2: {
    boxSizing: "border-box",
    backgroundColor: "#17d9f7",
    backgroundImage: "linear-gradient(90deg, #17d9f7 0%, #4e21ff 100%)",
    color: "white",
    border: "none",
    "&:hover": {
      border: "none",
    },
  },
  btn1: {
    color: "#4e21ff",
    border: "1px solid #4e21ff",
  },
  col: {
    // border: "1px solid black",
    width: "50%",
    height: "90vh",
    // padding:"2%"
  },
  img: {
    width: "100px",
    height: "100px",
  },
  img2: {
    width: "100%",
    height: "500px",
  },
});

const Landing = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <Container maxWidth={1} className={classes.container}>
        <Grid container spacing={2}>
          <Box flexGrow={1}>
            <Grid item>
              <img src={logoImage} className={classes.img} />
            </Grid>
          </Box>

          <Grid item>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn1}
              >
                Signup
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button
                startIcon={<Search />}
                variant="contained"
                color="primary"
                className={classes.btn2}
              >
                Search
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            className={classes.col}
            item
            container
            direction="column"
            justify="center"
          >
            <Grid item>
              <Typography variant="h3">
                A Platform Which Helps You
                <br /> To Arrange Blood
                <br /> On The Go
              </Typography>
            </Grid>
            <Grid item>
              <SignIn />
            </Grid>
          </Grid>

          <Grid item className={classes.col}>
          <img src={drImage} className={classes.img2} />

          </Grid>
        </Grid>
      </Container>

      {/* <Container >
        <Grid container justify = 'center' spacing ={3}>
          <Grid item xs={12} xl={3} sm={12} md={6} lg={3}>
            <Paper>
              <Box p = {3}>
                <Typography variant={"h3"}>Hello World</Typography>
                <Typography variant={"p"}>This is a paragraph</Typography>
                <br/>
                <Button variant= "contained" color="primary">
                  Click
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={3} sm={12} md={6} lg={3}>
            <Paper>
              <Box p = {3}>
                <Typography variant={"h3"}>Hello World</Typography>
                <Typography variant={"p"}>This is a paragraph</Typography>
                <br/>
                <Button variant= "contained" color="primary">
                  Click
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={3} sm={12} md={6} lg={3}>
            <Paper>
              <Box p = {3}>
                <Typography variant={"h3"}>Hello World</Typography>
                <Typography variant={"p"}>This is a paragraph</Typography>
                <br/>
                <Button variant= "contained" color="primary">
                  Click
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={3} sm={12} md={6} lg={3}>
            <Paper>
              <Box p = {3}>
                <Typography variant={"h3"}>Hello World</Typography>
                <Typography variant={"p"}>This is a paragraph</Typography>
                <br/>
                <Button variant= "contained" color="primary">
                  Click
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container> */}

      {/* <Container className={classes.container} maxWidth="xl">
        <Box className={classes.columns}>
          <Box
            style={{ border: "1px solid black", width: "50%", height: "80%" }}
            // m={2} p={2}
          ></Box>
          <Box
            style={{ border: "1px solid green", width: "50%", height: "80%" }}
            m={2}
          ></Box>
        </Box>
      </Container> */}
    </Fragment>
  );
};

export default Landing;
