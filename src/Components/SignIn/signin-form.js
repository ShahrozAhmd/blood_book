import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "./signin-form-styles";
import {   Typography, Box } from "@material-ui/core";
import Google from "@material-ui/icons/Google";


const SignInForm = (props) => {
  const classes = useStyles();

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
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.btn}
      >
        Sign In
      </Button>

      <Typography variant="h5" style={{textAlign:"center"}}>Or</Typography>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.btn + " " + classes.googleBtn}
        startIcon={<Google />}
      >
        SignIn With Google
      </Button>
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
