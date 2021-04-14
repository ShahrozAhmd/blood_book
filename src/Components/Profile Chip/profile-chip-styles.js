import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "inherit",
      padding: theme.spacing(1),
    },
    // media: {
    //   height: 0,
    //   paddingTop: "56.25%", // 16:9
    // },
    avatar: {
      backgroundColor: "red",
    },
  };
});

export default useStyles;
