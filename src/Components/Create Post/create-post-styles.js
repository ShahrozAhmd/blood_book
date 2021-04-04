import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    creatPostContainer: {
      "& > *": {
        width: theme.spacing(75),
        height: theme.spacing(10),
      },
    },
    postTexField: {
      width: theme.spacing(50),
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid transparent",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    createpostbox: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(40),
      },
    },
  };
});

export default useStyles;
