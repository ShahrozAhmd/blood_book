import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useStyles from "./create-post-styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import DescriptionIcon from "@material-ui/icons/Description";
import VideocamIcon from "@material-ui/icons/Videocam";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";

const CreatePost = () => {
  const classes = useStyles();

  // state for handeling select blood option starts here
  const [bloodType, setBloodType] = useState("");

  const handleChangeBloodType = (event) => {
    setBloodType(event.target.value);
  };
  // state for handeling select blood option ends here

  // state for no of bottle of blood option starts here
  const [bottles, setBottles] = useState("");

  const handleChangeBottles = (event) => {
    setBottles(event.target.value);
  };
  // state for no of bottle of blood option ends here

  //urgent blood option state starts>>>>
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeUrgentBlood = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  //<<<< urgent blood option state end
  return (
    <div className={classes.createpostbox}>
      <Paper elevation={3}>
        <form className={classes.writepost} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Write your request post..."
            variant="outlined"
          />

          <Box display="flex" justifyContent="space-evenly">
            <Box>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <VideocamIcon />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="video/*"
                className={classes.input}
                id="video-icon"
                type="file"
              />
              <label htmlFor="video-icon">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <DescriptionIcon />
                </IconButton>
              </label>
            </Box>

            <Box>
              <input
                accept="video/*"
                className={classes.input}
                id="video-icon"
                type="file"
              />
              <label htmlFor="video-icon">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <AddLocationIcon />
                </IconButton>
              </label>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around">
            {/* Select blood option */}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Blood Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bloodType}
                onChange={handleChangeBloodType}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
              </Select>
            </FormControl>
            {/* Select no of bottles*/}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-bottles">Bottles</InputLabel>
              <Select
                labelId="demo-simple-select-bottles"
                id="demo-simple-select"
                value={bottles}
                onChange={handleChangeBottles}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChangeUrgentBlood}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
            </Box>

            <Box className={classes.dateField}>
              <TextField
                id="datetime-local"
                label="Set Time/Date"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default CreatePost;
