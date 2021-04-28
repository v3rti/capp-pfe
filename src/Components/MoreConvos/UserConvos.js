import React from 'react';
import {Paper} from '@material-ui/core';

import useStyles from './Convo UI/Styles';
import LeftSideBar from './Convo UI/LeftSideBar';


function UserConvo(){
  
  const classes = useStyles();  

  return(
    <div className={classes.papersWrapper}>
      <Paper className={classes.paperEx} elevation={3}>
        
      </Paper>

      <Paper className={classes.paperSecond} elevation={3}>
        <LeftSideBar />
      </Paper>
      
    </div>
  )
}


export default UserConvo;