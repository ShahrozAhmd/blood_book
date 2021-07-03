import React, { useEffect, useState } from "react";
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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const CreatePost = (props) => {
  const classes = useStyles();
  // set message
  const [message, setMessage] = useState("");
  // state for handeling select blood option
  const [bloodGroup, setBloodGroup] = useState("");
  // state for no of bottle of blood option
  const [bottles, setBottles] = useState("");
  //set amount option state
  const [amount, setAmount] = useState({
    amount: "",
  });
  // time and date:
  const [timeDate, setTimeDate] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleTimeDate = (e) => {
    setTimeDate(e.target.value);
  };
  //paid and urgent blood option state
  const [switchButton, setSwitchButton] = useState({
    urgentBlood: false,
    paidBlood: false,
  });
  // set blood type state
  const handleChangeBloodGroup = (event) => {
    setBloodGroup(event.target.value);
  };
  // set no of bottle state
  const handleChangeBottles = (event) => {
    setBottles(event.target.value);
  };
  const handleSwitchChange = (event) => {
    setSwitchButton({
      ...switchButton,
      [event.target.name]: event.target.checked,
    });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // const handleAmountChange = (prop) => (event) => {
  //   setAmount({ ...amount, [prop]: event.target.value });
  // };

  const allBloodGroups = () => {
    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    return bloodGroups.map((item) => <MenuItem value={item}>{item}</MenuItem>);
  };
  const numberOfBottles = () => {
    const noOfBottles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return noOfBottles.map((item) => <MenuItem value={item}>{item}</MenuItem>);
  };

  useEffect(() => {
    console.log(timeDate);
    console.log(message);
    console.log(bloodGroup);
    console.log(bottles);
    console.log(amount);
    console.log(switchButton.urgentBlood);
    console.log(switchButton.paidBlood);
  }, [
    timeDate,
    message,
    bloodGroup,
    bottles,
    amount,
    switchButton.urgentBlood,
    switchButton.paidBlood,
  ]);

  return (
    <Box className={classes.createpostbox}>
      <form className={classes.writepost} noValidate autoComplete="off">
        <Box
          display="flex"
          flexDirection="column"
          justifycContent="space-between"
        >
          <Box>
            <TextField
              onChange={handleMessageChange}
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Write your request post..."
              variant="outlined"
            />
          </Box>
          {/* upload media icons starts here */}
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

          <Box display="flex" justifyContent="space-between">
            {/* Select blood option */}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Blood Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bloodGroup}
                onChange={handleChangeBloodGroup}
              >
                {/* this function returns the dropdown elements */}
                {allBloodGroups()}
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
                {numberOfBottles()}
              </Select>
            </FormControl>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchButton.urgentBlood}
                    onChange={handleSwitchChange}
                    name="urgentBlood"
                    color="primary"
                  />
                }
                label="Urgent"
              />
            </Box>

            <Box className={classes.dateField}>
              <TextField
                onChange={handleTimeDate}
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

          <Box display="flex" justifyContent="space-between">
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchButton.paidBlood}
                    onChange={handleSwitchChange}
                    name="paidBlood"
                    color="primary"
                  />
                }
                label="Paid"
              />
            </Box>

            <Box>
              <FormControl fullWidth>
                <InputLabel htmlFor="standard-adornment-amount">
                  Amount
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={amount.amount}
                  onChange={handleAmountChange}
                  startAdornment={
                    <InputAdornment position="start">Rs</InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>

          <Button variant="contained" color="primary">
            POST
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
