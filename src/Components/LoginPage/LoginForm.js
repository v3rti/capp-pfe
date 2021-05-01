import { TextField,Button, Typography } from '@material-ui/core';
import React, {useContext} from 'react';
import MyContext from '../ContextTest/MyContext';
import useStyles from './Styles';


function LoginForm(){ 

  const classes = useStyles();
  const {isLoggedIn,setIsLoggedIn} = useContext(MyContext);
  

  function handleFormSubmit(e){
    e.preventDefault();
    setIsLoggedIn(true);
  }

 

  return(
    
    <div className={classes.wrapper}>
      <Typography className={classes.textTitle} variant="h3">
        Login And Chat now!
      </Typography>
      <form onSubmit={handleFormSubmit} className={classes.loginForm}>
          <TextField className={classes.loginInputs} variant="outlined" label="Username" />
          <TextField type="password" className={classes.loginInputs} variant="outlined" label="Password" />
          <Button type="submit" variant="contained" color="secondary" className={classes.loginButton}>
            Login
          </Button>
      </form>
    </div>
  
  )
}

export default LoginForm;