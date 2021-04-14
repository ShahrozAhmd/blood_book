import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(1),
      width: "inherit",
      height: "70vh",
      maxHeight: "70vh",
      // overflow:"scroll"
    },
  };
});

export default useStyles;
