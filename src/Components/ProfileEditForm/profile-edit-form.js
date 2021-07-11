import React, { useState } from "react";
import useStyles from "./profile-edit-form-styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function ProfileEditForm(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    privateEmail: true,
    privatePhoneNumber: true,
    privateLocation: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  switch (props.toEdit) {
    case "bio":
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={state.privateEmail}
                  onChange={handleChange}
                  name="privateEmail"
                />
              }
              label="Private Email"
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={state.privateEmail}
                  onChange={handleChange}
                  name="privatePhoneNumber"
                />
              }
              label="Private Number"
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            fullWidth
          />
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={state.privateEmail}
                  onChange={handleChange}
                  name="privateLocation"
                />
              }
              label="Private Location"
            />
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            fullWidth
          />
        </form>
      );

      break;
    case "personal":
      break;
    case "professional":
      break;
  }
}

export default ProfileEditForm;
