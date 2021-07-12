import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    width:"100%"
  },
  input: {
    display: 'none',
  },
}));

export default useStyles;
