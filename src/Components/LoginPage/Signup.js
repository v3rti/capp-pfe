import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab/';
import React, {useState, useContext} from 'react';
import useStyles from './Styles';
import {useHistory} from 'react-router-dom';
import MyContext from '../ContextTest/MyContext';


function Signup(){

  const classes = useStyles(); 
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [fullName,setFullName] = useState("");
  const [alert, setAlert] = useState(false);
  const [formErrors, setErrors] = useState(false);
  const history = useHistory();
  const {isLoggedIn,setIsLoggedIn} = useContext(MyContext);
  const [signedup,setSignedup] = useState(false);
  let [counter,setCounter] = useState(5);


  async function handleSignup(e){
    e.preventDefault();
    setErrors(false);

    if(username === "" || email === "" || fullName === "" || password === ""){
      setErrors(true);
    }
    else {
      
      await fetch('/users', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          username,
          password,
          fullName
        })
      })
      setErrors(false);
      setAlert(true);
      setPassword("");
      setUsername("");
      setFullName("");
      setEmail("");
      let intervTest = setInterval(() => {
        if(counter !== 0){
          setCounter(counter--);
          
        }
        else{
          clearInterval(intervTest);
          setAlert(false)
          history.push('/');
        }
      },1000)

      setTimeout(() => {
        setIsLoggedIn(true);
      },500);
      
      
    }

    
  }

  return(
  <div>
    {alert ?<Alert className={classes.notif} severity="success">
            <AlertTitle>Account Created Successfully</AlertTitle>
            You'll be redirected in {counter} — <strong className={classes.redirectMessage} color="secondary" onClick={() => history.push('/')} >
                Check Conversations
              </strong>
            
    </Alert> : null}
    {!isLoggedIn ? 
    <div className={classes.signupWrapper}>
      <Typography className={classes.textTitle} variant="h3">
        Sign up And Join Convos Now!
      </Typography>
      
      <form onSubmit={handleSignup} className={classes.signUpForm}>
          {formErrors ? <Typography variant="h5" className={classes.errorMessage}>You need to fill all the forms.</Typography> : null}
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


)}


export default Signup;