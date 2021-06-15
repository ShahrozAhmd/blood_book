import { makeStyles } from "@material-ui/core/styles";

const  useStyles = makeStyles((theme) => ({
    root: {
      // height: "100vh",
    },
    // text:{
    //   backgroundColor:"pink",
    //   borderTopColour:"green"
    // }, 
    form: {
      width: "60%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    btn: {
        margin: "1%",
      boxSizing: "border-box",
      backgroundColor: "#17d9f7",
      backgroundImage: "linear-gradient(90deg, #17d9f7 0%, #4e21ff 100%)",
      color: "white",
      border: "none",
      "&:hover": {
        border: "none",
      },
    },
    
  }));

  export default  useStyles; 