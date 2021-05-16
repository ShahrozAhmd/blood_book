import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalpaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid white",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    height: "50%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    
  },
  button: {
    margin: theme.spacing(1),
    width:"100%"
  },
}));

export default useStyles;