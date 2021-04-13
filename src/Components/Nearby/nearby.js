import { Box } from "@material-ui/core";
import react, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "./nearby-styles";

const Nearby = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box>
          <Paper elevation={3} className = {classes.root}/>
        </Box>
        <Box>
          <Paper elevation={3} className = {classes.root}/>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Nearby;
