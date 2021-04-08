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
      backgroundColor: "#F2F3F4",
      padding: "1%",
      borderRadius: "10px",
      color: "#909497",
    },
    paper: {
      position: "absolute",
      width: "40%",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid transparent",
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
    },
    createpostbox: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        height: theme.spacing(40),
      },
    },
    writepost: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "90%",
      },
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: "none",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    // dateField:{
    //   width:"30px"
    // }
  };
});

export default useStyles;
