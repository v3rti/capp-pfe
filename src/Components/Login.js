import { TextField, makeStyles, Button, Typography } from '@material-ui/core';
import React from 'react';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  wrapper:{
    width: "700px",
    margin: "auto",
    height: "700px",
    backgroundColor: "#f5f5f5"
  },
  loginForm: {
    display: "flex",
    flexDirection:"column",
    marginTop: "60px",
    padding: "20px",
    width: "auto"
  },
  loginButton: {
    margin:"50px 100px"
  },
  loginInputs: {
    margin: "20px 100px"
  },
  textTitle: {
  display: "flex",
   justifyContent: "center",
   marginTop: "50px"
    
  }

});

function Login(){ 

  const classes = useStyles();
  const history = useHistory();

  function handleFormSubmit(e){
    e.preventDefault();
  }

  return(
  <div className={classes.wrapper}>

    <Typography className={classes.textTitle} variant="h3">
      Login And Chat now!
    </Typography>
      <form onSubmit={handleFormSubmit} className={classes.loginForm}>
        <TextField className={classes.loginInputs} variant="outlined" label="Username" />
        <TextField type="password" className={classes.loginInputs} variant="outlined" label="Password" />
        <Button onClick={() => history.push('/')} type="submit" variant="contained" color="secondary" className={classes.loginButton}>
          Login
        </Button>
      </form>
  </div>
  )
}

export default Login;