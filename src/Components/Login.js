import { TextField, makeStyles, Button, Typography } from '@material-ui/core';
import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import MyContext from './ContextTest/MyContext';

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
  const {isLoggedIn} = useContext(MyContext);
  let rightPage;
  function handleFormSubmit(e){
    e.preventDefault();
  }
  if(isLoggedIn){
    rightPage = "Welcome user";
  }else{
    rightPage = "Please Login first"
  }

  return(
  <div className={classes.wrapper}>
    <h1>{rightPage}</h1>
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