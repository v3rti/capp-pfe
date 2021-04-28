import React from 'react';
import {Paper, TextField, Typography} from '@material-ui/core';

import useStyles from './Convo UI/Styles';
import LeftSideBar from './Convo UI/LeftSideBar';


function UserConvo(){
  
  const classes = useStyles();  

  return(
    <div className={classes.papersWrapper}>
      <Paper className={classes.paperEx} elevation={3}>
        
        <div className={classes.msgWrapper}>
          <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Some message in hereSome message in hereSome message in hereSome message in hereSome message in here more text here </Typography>
          </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Testing small text</Typography>
        </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Testing a very long text here  Aliquam id commodo tortor, vel euismod dui. Mauris eget ex id massa placerat rutrum in vel purus. Donec luctus tincidunt aliquam. Nullam vulputate aliquam diam vitae lacinia. Pellentesque convallis dictum nisl, a cursus felis commodo quis. Nulla tellus ante, finibus quis vehicula eget, convallis at velit</Typography>
        </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>1WORD</Typography>
        </Paper>
        <div className={classes.anotherWrapper}></div>
        </div>
        <Paper className={classes.usertextField}>

          <TextField className={classes.actualTextField} fullWidth label="Type your message.." variant="outlined">
            
          </TextField>
        </Paper>
      </Paper>

      <Paper className={classes.paperSecond} elevation={3}>
        <LeftSideBar />
      </Paper>

    </div>
  )
}


export default UserConvo;