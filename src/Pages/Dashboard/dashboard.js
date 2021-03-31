import { Box, Container, CssBaseline, Grid } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import react, { Fragment } from "react";
import Header from "../../Components/Header/header";
import useStyles from "./dashboard-styles";

function Dashboard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={1}>
        <Header />

        <Container maxWidth="md">
          <Box display="flex" className={classes.main} justifyContent="center">
            <Box className={classes.box} flexGrow={2}>
              1
            </Box>
            <Box className={classes.box} flexGrow={1}>
              2
            </Box>
          </Box>
        </Container>
      </Container>
    </Fragment>
  );
}

export default Dashboard;
