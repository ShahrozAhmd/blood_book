import React from "react";
// import useStyles from './Eligibile-donor-form-styles'
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

function EligibileDonorForm(props) {
  // const classes = useStyles();

  return (
    <div>
      <BorderLinearProgress variant="determinate" value={20} />
      <Typography variant="subtitle1" gutterBottom>
        Its a quick test, If you have any of these Diseases, you are not Fine to
        donate blood to anyone, must Check the diseases you have.
      </Typography>
    </div>
  );
}

export default EligibileDonorForm;
