import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>{
    return {
        creatPostContainer: {
            '& > *': {
              width: theme.spacing(60),
              height: theme.spacing(10),
            },
          },
          postTexField:{
            width: theme.spacing(50),
          
          }

  }});

  export default useStyles;