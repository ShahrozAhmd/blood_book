import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme)=>{
    return {
    root: {
      color: "#758283",
    },
    container: {
      height: "100vh",
      backgroundColor: "white",
    },
    btn2: {
      boxSizing: "border-box",
      backgroundColor: "#17d9f7",
      backgroundImage: "linear-gradient(90deg, #17d9f7 0%, #4e21ff 100%)",
      color: "white",
      border: "none",
      "&:hover": {
        border: "none",
      },
    },
    btn1: {
      color: "#4e21ff",
      border: "1px solid #4e21ff",
    },
    col: {
      // border: "1px solid black",
      width: "50%",
      height: "90vh",
      // padding:"2%"
    },
    img: {
      width: "100px",
    },
    img2: {
      width: "100%",
      height: "500px",
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
    
      borderRadius : "2%",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }
  });
  export default  useStyles;