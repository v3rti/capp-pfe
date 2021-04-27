import React from 'react';
import {makeStyles, Typography, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => { 

  return {

  paperEx: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    margin: "auto",
    width: 1100,
    height: 460,
  },
  wrapperSecond: {
    height: 35,
  },
  
  myButtons: {
    marginTop: 60,
    display: "flex",
    width: "900px",
    justifyContent: "center",
  },
  buttonOne: {
    marginRight: 10
  }
  }
})


function ErrorConvo(){

  const classes = useStyles();
  const history = useHistory();
  return(
    <div>
      <div className={classes.paperEx} >
        <Typography className={classes.firstText} variant="h1">
          Ooops.
        </Typography>
        <div className={classes.wrapperSecond}></div>
        <Typography classes={classes.secondText}  variant="h4">
          Sorry but the conversation you're looking for doesn't exist.
        </Typography>
        <div className={classes.myButtons}>
          <Button size="large" className={classes.buttonOne} color="secondary" variant="contained" onClick={() => history.push('/create')}>
            Create One Here
          </Button>
          <Button size="large" color="secondary" variant="contained" onClick={() => history.push('/search')} >
            Search for Conversations
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorConvo;