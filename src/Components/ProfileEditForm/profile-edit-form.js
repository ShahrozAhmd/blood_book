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
import { useSelector } from "react-redux";

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
  const profile = useSelector((state) => state.profile.profileData);
  // chunks of profile:
  const [generalProfile, setGeneralProfile] = useState(profile.general);
  const [bioProfile, setBioProfile] = useState(profile.bio);
  const [professionalProfile, setProfessionalProfile] = useState(
    profile.professional
  );
  const [personalProfile, setPersonalProfile] = useState(profile.personal);

  console.log(generalProfile);
  console.log(bioProfile);
  console.log(professionalProfile);
  console.log(personalProfile);

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

  const bioTextFieldChangeHandler = (e) => {
    setBioProfile({ ...bioProfile, [e.target.name]: e.target.value });
  };

  const personalTextFieldChangeHandler = (e) => {
    setPersonalProfile({ ...personalProfile, [e.target.name]: e.target.value });
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
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={bioProfile.email}
            onChange={bioTextFieldChangeHandler}
          />
          {/* <Box>
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
          </Box> */}
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            name="phoneNumber"
            value={bioProfile.phoneNumber}
            onChange={bioTextFieldChangeHandler}
          />
          {/* <Box>
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
          </Box> */}
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            name="city"
            value={bioProfile.city}
            onChange={bioTextFieldChangeHandler}
          />
          {/* <Box>
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
          </Box> */}

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            // user ki previous set info yahan as a default value pass karni hai.
            defaultValue="Default Value"
            variant="outlined"
            fullWidth
            name="shortIntro"
            value={bioProfile.shortIntro}
            onChange={bioTextFieldChangeHandler}
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
            name="age"
            value={personalProfile.age}
            onChange={personalTextFieldChangeHandler}
          />
          {/* <Box>
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
          </Box> */}
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="Gender">Gender</InputLabel>
            <Select
              labelId="Gender"
              id="Gender"
              value={personalProfile.gender}
              onChange={personalTextFieldChangeHandler}
              name="gender"
              label="Gender"
            >
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
              name="maritalStatus"
              value={personalProfile.maritalStatus}
              onChange={personalTextFieldChangeHandler}
              label="MaritalStatus"
            >
              <MenuItem value={"single"}>Single</MenuItem>
              <MenuItem value={"married"}>Married</MenuItem>
              <MenuItem value={"comitted"}>Comitted</MenuItem>
            </Select>
          </FormControl>
          {/* <Box>
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
          </Box> */}

          <Autocomplete
            fullWidth
             onChange={(_, value) => setPersonalProfile({ ...personalProfile, value })}
            value={personalProfile.bloodGroup}
            onChange={personalTextFieldChangeHandler}
            options={BLOOD_GROUPS.map((option) => option.bloodType)}
            renderInput={(params) => (
              <TextField
                name="bloodGroup"
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
