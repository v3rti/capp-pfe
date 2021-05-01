import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Styles';



function Signup(){

  const classes = useStyles();

  function handleSignup(e){
    e.preventDefault();
  }

  return(
  <div>
    <div className={classes.signupWrapper}>
      <Typography className={classes.textTitle} variant="h3">
        Sign up And Join Convos Now!
      </Typography>
      <form onSubmit={handleSignup} className={classes.signUpForm}>
          <TextField className={classes.loginInputs} variant="outlined" label="Email Address" />
          <TextField className={classes.loginInputs} variant="outlined" label="Username" />
          <TextField type="password" className={classes.loginInputs} variant="outlined" label="Password" />
          <TextField type="password" className={classes.loginInputs} variant="outlined" label="Confirm Password" />
          <FormControlLabel className={classes.checkBox}
          control={<Checkbox name="checkTerms" />}
          label="I agree on the terms" />
          <Button type="submit" variant="contained" color="secondary" className={classes.loginButton}>
            Sign Up
          </Button>
      </form>
    </div>
  </div>


)}


export default Signup;