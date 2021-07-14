import React, { useEffect, useState } from "react";
import useStyles from "./Eligibile-donor-form-styles";
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
import { useSelector, useDispatch } from "react-redux";
import { updateProfileData } from "../../../store/actions/profile_actions";

const EligibileDonorForm = (props) => {
  const profile = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [donorForm, setDonorForm] = useState(profile.donorForm);

  const donorFormTextFieldChangeHandler = (e) => {
    setDonorForm({ ...donorForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(donorForm);
    props.isEligible(donorForm.disease);
    updateDonorForm();
  };
  useEffect(() => {
    if (donorForm.disease) {
      setDonorForm({ ...donorForm, wannaBeDonor: false });
    } else {
      setDonorForm({ ...donorForm, wannaBeDonor: true });
    }
  }, [donorForm.disease]);

  const updateDonorForm = () => {
    let uid = localStorage.getItem("uid");

    dispatch(updateProfileData(uid, donorForm, "donorForm"));
  };

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
          name="city"
          value={donorForm.city}
          onChange={donorFormTextFieldChangeHandler}
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
            name="disease"
            value={donorForm.disease}
            onChange={donorFormTextFieldChangeHandler}
            label="Any Life Risk Disease"
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>

        <Autocomplete
          fullWidth
          value={donorForm.donorBloodGroup}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setDonorForm({
                ...donorForm,
                donorBloodGroup: newValue,
              });
            }
          }}
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
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </form>
    </>
  );
};

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
