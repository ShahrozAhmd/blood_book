import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Loader from "../../UI/Loader/loader";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
}));

export default function SignUp(props) {
  const classes = useStyles();
  // get state from store
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
          value={props.email}
          onChange={props.setCredentialsHandler}
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
        value={props.password}
        onChange={props.setCredentialsHandler}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit + " " + classes.btn2}
        onClick={props.emailAndPassSignHandler}
      >
        {state.isSignUnLoading ? <Loader /> : "SIGN UP"}
      </Button>
    </form>
  );
}
