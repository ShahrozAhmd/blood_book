import React, { useState } from "react";
import useStyles from "./profile-edit-form-styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Autocomplete from "@material-ui/lab/Autocomplete";

const BLOOD_GROUPS = [
  { bloodType: "A+" },
  { bloodType: "A-" },
  { bloodType: "B+" },
  { bloodType: "B-" },
  { bloodType: "O+" },
  { bloodType: "O-" },
  { bloodType: "AB+" },
  { bloodType: "AB+" },
];

function ProfileEditForm(props) {
  const classes = useStyles();

  const [privateFields, setPrivateFields] = useState({
    privateEmail: false,
    privatePhoneNumber: false,
    privateCity: false,
    privateAge: false,
    privateMaritalStatus: false,
  });

  const handleSwitchChange = (event) => {
    setPrivateFields({
      ...privateFields,
      [event.target.name]: event.target.checked,
    });
  };

  switch (props.toEdit) {
    case "general":
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
          />
          <label style={{ width: "100%" }} htmlFor="contained-button-file">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              component="span"
            >
              Upload Profile Image
            </Button>
          </label>
          <TextField
            style={{ marginTop: "3%" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DoneIcon />}
          >
            UPDATE
          </Button>
        </form>
      );
      break;
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
                  checked={privateFields.privateEmail}
                  onChange={handleSwitchChange}
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
                  checked={privateFields.privatePhoneNumber}
                  onChange={handleSwitchChange}
                  name="privatePhoneNumber"
                />
              }
              label="Private Number"
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
          />
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={privateFields.privateCity}
                  onChange={handleSwitchChange}
                  name="privateCity"
                />
              }
              label="Private City"
            />
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            // user ki previous set info yahan as a default value pass karni hai.
            defaultValue="Default Value"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DoneIcon />}
          >
            UPDATE
          </Button>
        </form>
      );
      break;
    case "personal":
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={privateFields.privateAge}
                  onChange={handleSwitchChange}
                  name="privateAge"
                />
              }
              label="Private Age"
            />
          </Box>
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="Gender">Gender</InputLabel>
            <Select
              labelId="Gender"
              id="Gender"
              // value={age}
              // onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="Gender">Marital Status</InputLabel>
            <Select
              labelId=">MaritalStatus"
              id="MaritalStatus"
              // value={age}
              // onChange={handleChange}
              label="MaritalStatus"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"single"}>Single</MenuItem>
              <MenuItem value={"married"}>Married</MenuItem>
              <MenuItem value={"omitted"}>Comitted</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  checked={privateFields.privateMaritalStatus}
                  onChange={handleSwitchChange}
                  name="privateMaritalStatus"
                />
              }
              label="Private Marital Status"
            />
          </Box>

          <Autocomplete
            fullWidth
            // onChange={(_, value) => setState(value)}
            options={BLOOD_GROUPS.map((option) => option.bloodType)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Blood Group"
                margin="normal"
                variant="outlined"
              />
            )}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DoneIcon />}
          >
            UPDATE
          </Button>
        </form>
      );
      break;
    case "professional":
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Education"
            variant="outlined"
            fullWidth
            m={-2}
          />

          <TextField
            id="outlined-basic"
            label="Occupation"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="outlined-basic"
            label="Languages"
            variant="outlined"
            placeholder="use (,) separation to add multiple languages you can speak"
            fullWidth
          />

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DoneIcon />}
          >
            UPDATE
          </Button>
        </form>
      );
      break;
  }
  return null;
}

export default ProfileEditForm;
