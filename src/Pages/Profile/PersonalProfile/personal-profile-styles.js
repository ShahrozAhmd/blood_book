import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    width: "100%",
    height: "95%",
  },
  container: {
    border: "1px solid black",
    height: "100vh",
    maxHeight: "100vh",
  },
  iconBox: {
    border: "1px solid grey",
    padding: "1%",
    margin: "2%",
  },
}));

export default useStyles;
