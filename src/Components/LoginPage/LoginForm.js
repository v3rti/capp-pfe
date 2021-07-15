import { TextField,Button, Typography } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import MyContext from '../ContextTest/MyContext';
import useStyles from './Styles';
import Cookies from 'js-cookie';
import { Alert } from '@material-ui/lab';

function LoginForm(){ 

  const classes = useStyles();
  const {isLoggedIn,setIsLoggedIn,setCurrentUser,currentUser} = useContext(MyContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState();  
  const [cookies,setCookies] = useState("");


  async function handleFormSubmit(e){
    e.preventDefault();
    
    const res = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    if(res.status === 200){
        setIsLoggedIn(true);
        setLoginStatus(0)
    }else{
        setIsLoggedIn(false)
        setLoginStatus(1)
    }
    
    
    
  }

 

  return(
    
    <div className={classes.wrapper}>
      
      {loginStatus === 1 ? <Alert severity="error">Please check your email or password!</Alert> : null}

      <Typography className={classes.textTitle} variant="h3">
        Login And Chat now!
      </Typography>
      <form onSubmit={handleFormSubmit} className={classes.loginForm}>
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} className={classes.loginInputs} variant="outlined" label="Email Address" />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" className={classes.loginInputs} variant="outlined" label="Password" />
          <Button type="submit" variant="contained" color="secondary" className={classes.loginButton}>
            Login
          </Button>
      </form>
    </div>
  
  )
}

export default LoginForm;