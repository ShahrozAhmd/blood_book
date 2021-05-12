import React, { useState } from "react";
import useStyles from "./profile-edit-form-styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function ProfileEditForm(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    private: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={state.private}
              onChange={handleChange}
              name="private"
            />
          }
          label="Private"
        />
      </Box>
    </form>
  );
}

export default ProfileEditForm;
