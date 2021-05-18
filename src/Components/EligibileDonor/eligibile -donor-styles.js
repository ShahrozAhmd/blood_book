import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(7),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
