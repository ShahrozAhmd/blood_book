import { Box } from '@material-ui/core';
import react from 'react';
import useStyles from "./profile-chip-styles";
import Paper from "@material-ui/core/Paper";


const ProfileChip = (props) => {
    const classes  = useStyles();
return(
  
    <Box display="flex" flexDirection="column" justifyContent="center">
        <Box>
          <Paper elevation={3} className = {classes.root}>
          
          </Paper>
        </Box>
      </Box>

    
)
}
export default ProfileChip;