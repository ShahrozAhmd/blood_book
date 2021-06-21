import React from "react";
import "../../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "./signin-form-styles";
import { Typography, Box } from "@material-ui/core";
import Google from "@material-ui/icons/Google";
import Loader from "../../UI/Loader/loader";
import { useDispatch, useSelector } from "react-redux";

const SignInForm = (props) => {
  const classes = useStyles();
  const state = useSelector((state) => state);

  return (
    <form className={classes.form} noValidate>
      <Box>
        <TextField
          className={classes.text}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={props.setCredentialsHandler}
          value={props.open ? null : props.email}
        />
      </Box>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        className={classes.textBox}
        onChange={props.setCredentialsHandler}
        value={props.open ? null : props.password}
      />

      {/* Sign in with email button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={props.emailAndPassSignHandler}
      >
        {state.isSignInLoading ? <Loader /> : "SIGN IN"}
      </Button>

      <Typography variant="h5" style={{ textAlign: "center" }}>
        Or
      </Typography>
      {/* Sign in with google button */}
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.btn + " " + classes.googleBtn}
        startIcon={<Google />}
        onClick={props.googleSignInHandler}
      >
        {state.isGoogleLoading ? <Loader /> : "SignIn With Google"}
      </Button>
      {/* forgot password text */}
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
export default SignInForm;
