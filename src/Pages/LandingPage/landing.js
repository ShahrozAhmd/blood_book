import React, { Fragment,useState } from "react";
// import classes from "./landing.module.css";
import SignIn from "../../Components/SignIn/signin-form";
import SignUp from "../../Components/Signup/signup-form";
import Container from "@material-ui/core/Container";
import Search from "@material-ui/icons/Search";
import logoImage from "../../assets/logo.png";
import drImage from "../../assets/dr.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "./landing-styles";
import {
  Box,
  CssBaseline,
  Typography,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

const Landing = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <CssBaseline />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">SignUp</h2>
            <SignUp />
          </div>
        </Fade>
      </Modal>

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
                onClick={handleOpen}
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
              <Typography variant="h3" classes={{ root: classes.root }}>
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
