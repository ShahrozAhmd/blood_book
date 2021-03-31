import { Box, Container, Grid} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import react, { Fragment } from "react";
import Header from "../../Components/Header/header";
import useStyles from './dashboard-styles'



function Dashboard(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Container disableGutters maxWidth={1}>
        <Header />

        <Grid container>
          <Grid item>
           
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Dashboard;
