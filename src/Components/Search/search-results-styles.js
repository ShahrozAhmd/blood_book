import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
  width:"100%",
  height: "100%",
   padding:"1%",
   overFlow:"scroll"
  },
  card:{
      height:"150px",
      margin:"2%",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

export default useStyles;
