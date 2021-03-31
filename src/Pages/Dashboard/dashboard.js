import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import react, { Fragment } from "react";
import Header from "../../Components/Header/header";

const useStyles = makeStyles({
  box: {
    border: "1px solid black",
  },
  
    container: {
      height: "100vh",
      backgroundColor: "white",
    },

  sec1: {
    width: "25%",
    height: "100vh",
    border: "1px solid black",
  },
  sec2: {
    width: "50%",
    height: "100vh",
    border: "1px solid black",
  },
  sec3: {
    width: "25%",
    height: "100vh",
    border: "1px solid black",
  },
});

function Dashboard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Container disableGutters maxWidth={1}>
        <Header />

        <Grid container>
          <Grid item>
            <Box className={classes.sec1}>
              <p>1</p>
            </Box>
          </Grid>
          <Grid item>
            <Box className={classes.sec2}>
              <p>2</p>
            </Box>
          </Grid>
          <Grid item>
            <Box className={classes.sec3}>
              <p>3</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Dashboard;
