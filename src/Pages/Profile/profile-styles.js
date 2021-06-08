import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    width: "100%",
    height: "100",
  },
  container: {
    // border: "1px solid black",
    height: "100vh",
    // overflow: "scroll",
  },
  el: {
    border: "1px solid grey",
    padding: "1%",
    margin: "2%",
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

export default useStyles;
