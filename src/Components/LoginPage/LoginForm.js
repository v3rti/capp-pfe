import { TextField,Button, Typography } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import MyContext from '../ContextTest/MyContext';
import useStyles from './Styles';


function LoginForm(){ 

  const classes = useStyles();
  const {isLoggedIn,setIsLoggedIn} = useContext(MyContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [statusUwu, setStatusUwu] = useState("");  

  function handleFormSubmit(e){
    e.preventDefault();
    // setIsLoggedIn(true);
    fetch('/users/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => console.log(res.status))
  }

 

  return(
    
    <div className={classes.wrapper}>
      {statusUwu}
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