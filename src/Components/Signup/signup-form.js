import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
  },
  // text:{
  //   backgroundColor:"pink",
  //   borderTopColour:"green"
  // },
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

export default function SignUp() {
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
          type="text"
          label="User Name"
          name="name"
          autoFocus
        />
      </Box>
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit + " " + classes.btn2}
      >
        Sign Up
      </Button>
    </form>
  );
}
