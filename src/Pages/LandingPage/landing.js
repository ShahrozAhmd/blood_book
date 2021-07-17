import React, { Fragment, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  signOut,
} from "../../store/actions/auth_action";
import { useHistory } from "react-router-dom";
import ModalPopup from "../../UI/Modal/modal";

const Landing = (props) => {
  const [signUpMessage, setSignupMessage] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // STATES STARTS HERE>>>
  const state = useSelector((state) => state.authentication);
  console.log(state.authData);
  const [open, setOpen] = useState(false);

  // const [signUpModal, setSignUpModalOpen] = useState(false);

  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });
  // STATES ENDS HERE>>>

  // for setting up text boxes empthy
  useEffect(() => {
    setCredentials({ email: "", password: "" });
  }, [state.isSignUp, state.isSignIn]);

  // for closing the modal on successful signup
  useEffect(() => {
    setOpen(false);
  }, [state.isSignUp]);

  //HANDLERS
  // for modal
  const signUpModalOpen = () => {
    setOpen(true);
  };
  // for modal
  const signUpModalClose = () => {
    setOpen(false);
  };

  const setCredentialsHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const googleSignInHandler = (e) => {
    e.preventDefault();
    dispatch(signInWithGoogle());
  };
  const emailAndPassSignHandler = (e) => {
    e.preventDefault();
    if (open) {
      dispatch(
        signUpWithEmail(credentials.email, credentials.password, history)
      );
    } else {
      dispatch(
        signInWithEmail(credentials.email, credentials.password, history)
      );
    }
  };

  // if (state.isSignUp) {
  //   setOpen(false);
  //   setSignUpModalOpen(true);
  //   setSignupMessage(
  //     "Congratulations!! you have Signup Successfully, Signin To Login"
  //   );
  // }

  return (
    <Fragment>
      <CssBaseline />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={signUpModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">SignUp</h2>
            <SignUp
              email={credentials.email}
              password={credentials.password}
              setCredentialsHandler={setCredentialsHandler}
              emailAndPassSignHandler={emailAndPassSignHandler}
            />
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
                onClick={signUpModalOpen}
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
              {/* <Button
                startIcon={<Search />}
                variant="contained"
                color="primary"
                className={classes.btn2}
              >
                Search
              </Button> */}
              {/* <Button
                onClick={signOutHandler}
                variant="contained"
                color="primary"
                className={classes.btn2}
              >
                SignOut
              </Button> */}
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
              {/* Sign in component here */}
              <SignIn
                email={credentials.email}
                password={credentials.password}
                setCredentialsHandler={setCredentialsHandler}
                emailAndPassSignHandler={emailAndPassSignHandler}
                googleSignInHandler={googleSignInHandler}
                open={open}
              />
            </Grid>
          </Grid>

          <Grid item className={classes.col}>
            <img src={drImage} className={classes.img2} />
          </Grid>
        </Grid>
        {/* <ModalPopup open={signUpModalOpen} handleClose={signUpModalClose}>
          {signUpMessage &&  signUpMessage}
        </ModalPopup> */}
      </Container>
    </Fragment>
  );
};

export default Landing;
