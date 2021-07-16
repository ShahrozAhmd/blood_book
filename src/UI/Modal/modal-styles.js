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
    // padding: theme.spacing(2, 4, 3),
    width: "40%",
    // height: "100%",
    padding:"1%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export default useStyles;
