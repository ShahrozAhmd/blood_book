import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      margin: "2%",
      width: "100%",
    },
    urgentBarShow:{
      textAlign:"center",
      width:"100%",
      backgroundColor: "#E21717",
      color:"white",
      animation: `$urgentBar 2000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes urgentBar": {
          "0%":		{ backgroundColor: "#f50000"},
          "25%":		{ backgroundColor: "#e00000"},
          "50%"	:	{ backgroundColor: "#cc0000"},
          "75%"	:	{ backgroundColor: "#b80000"},
          "100%":	{ backgroundColor: "#b80000"},
      },
    urgentBarHide:{
      display:"none"
    },
    
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: "red",
    },
  }));
  
  export default useStyles;