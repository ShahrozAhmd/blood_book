import React, { useState } from "react";
import useStyles from './Eligibile-donor-form-styles'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import ModalPopup from "../../../UI/Modal/modal";



const EligibileDonorForm = (props) => {

  const classes = useStyles();

  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [hasDisease, setHasDisease] = useState(false);

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        You have to provide us these information to become a donor on this
        platform
      </Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth
        />
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="Disease">Any Life Risk Disease</InputLabel>
          <Select
            labelId="Disease"
            id="Disease"
            // value={age}
            // onChange={handleChange}
            label="Any Life Risk Disease"
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>

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
          SUBMIT
        </Button>
      </form>
    </>
  );
}

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


export default EligibileDonorForm;
