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
      padding:"0.5%",
      width: "50%",
      height:"70%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      
    },
    createpostbox: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        height: "100" 
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
