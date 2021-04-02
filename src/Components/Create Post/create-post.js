import react from "react";
import {
  Box,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  TextField,
} from "@material-ui/core";
import useStyles from "./create-post-styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CreatePost = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box className={classes.creatPostContainer}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  className={classes.postTexField}
                  id="standard-basic"
                  label="Create a blood request post"
                />
              </form>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default CreatePost;
