import React, { useState } from "react";
// import useStyles from './Eligibile-donor-form-styles'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import ModalPopup from "../../UI/Modal/modal";

function EligibileDonorForm(props) {
  // const classes = useStyles();
  const diseases = [
    "Diabetes",
    "ContinuousFever",
    "DrugAddict",
    "Hepatitis",
    "Malaria",
    "HIV ",
    "HeartDiseases",
    "KidneyDisease",
    "BloodIssues",
  ];
  const [state, setState] = useState({
    Diabetes: false,
    ContinuousFever: false,
    DrugAddict: false,
    Hepatitis: false,
    Malaria: false,
    HIV: false,
    HeartDiseases: false,
    KidneyDisease: false,
    BloodIssues: false,
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [visible, setVisible] = useState({
    private: true,
  });

  const handleVisiblityChange = (event) => {
    setVisible({ ...visible, [event.target.name]: event.target.checked });
  };
  const checkbox = diseases.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        label={item}
        control={
          <Checkbox checked={state.item} name={item} onChange={handleChange} />
        }
      />
    );
  });

  return (
    <div>
      <Box style={{ textAlign: "right" }}>
        <FormControlLabel
          control={
            <Switch
              checked={visible.private}
              onChange={handleVisiblityChange}
              name="private"
            />
          }
          label="Private"
        />
      </Box>

      <Typography variant="subtitle1" gutterBottom>
        Its a quick test, If you have any of these Diseases, you are not Fine to
        donate blood to anyone, must Check the diseases you have.
      </Typography>
      {checkbox}
      <Button
        onClick={props.setEligiblity}
        variant="contained"
        color="primary"
        style={{ width: "100%" }}
      >
        Submit
      </Button>
    </div>
  );
}

export default EligibileDonorForm;
