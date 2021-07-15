import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab/';
import React, {useState, useContext} from 'react';
import useStyles from './Styles';
import {useHistory} from 'react-router-dom';
import MyContext from '../ContextTest/MyContext';
import axios from 'axios';

function Signup(){

  const classes = useStyles(); 
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [fullName,setFullName] = useState();
  const [enableAlert, setEnableAlert] = useState(false);
  const [alertMessage,setAlertMessage] = useState("");

  const history = useHistory();
  const {isLoggedIn,setIsLoggedIn} = useContext(MyContext);

  function handleSignup(e){
    e.preventDefault();
    if(username === null || username === undefined || email === null || email === undefined || password === null || password === undefined || fullName === null || fullName === undefined){

      setAlertMessage("Please enter valid informations");
      setEnableAlert(true);
      setTimeout(() => setEnableAlert(false),5000);
    }else{
      let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      let passFormat = /^.{6,}$/;

      if(format.test(username) || format.test(fullName) || !emailFormat.test(email)){

        setAlertMessage("Please enter valid informations");
        setEnableAlert(true);
        setTimeout(() => setEnableAlert(false),5000);
      }else if(!passFormat.test(password)){

        setAlertMessage("Please enter a valid password");
        setEnableAlert(true);
        setTimeout(() => setEnableAlert(false),5000);
      }else{
        axios.post('/users/',{
          fullName,
          email,
          username,
          password
        }).then(res => {
          if(res.data === "ok"){
            setTimeout(() => {
              setIsLoggedIn(true);
            },500);
            
          }else if(res.data === "already"){
            setAlertMessage("Please enter a valid email adress");
            setEnableAlert(true);
            setTimeout(() => setEnableAlert(false),5000);
          }
        })
      }
    }
    
  }

  return(
    <div>
    {enableAlert ? <Alert severity="error">{alertMessage}</Alert> : null }
    
    {!isLoggedIn ? <div className={classes.signupWrapper}>
      <Typography className={classes.textTitle} variant="h3">
        Sign up And Join Convos Now!
      </Typography>
      
      <form onSubmit={handleSignup} className={classes.signUpForm}>
          
          <TextField className={classes.loginInputs} variant="outlined" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
          
          <TextField className={classes.loginInputs} variant="outlined" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
          
          <TextField className={classes.loginInputs} variant="outlined" label="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
         
          <TextField type="password" className={classes.loginInputs} variant="outlined" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          
          <FormControlLabel className={classes.checkBox}
          control={<Checkbox name="checkTerms" />}
          label="I agree on the terms blah blah" />
          <Button type="submit" variant="contained" color="secondary" className={classes.loginButton}>
            Sign Up
          </Button>
      </form>
    </div>
    : null}
  </div>
  )

}


export default Signup;