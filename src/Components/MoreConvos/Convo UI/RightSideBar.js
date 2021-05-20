import React,{useEffect, useState, useContext} from 'react';
import {Avatar, Card, CardHeader, Typography} from '@material-ui/core';
import MyContext from '../../ContextTest/MyContext';
import useStyles from './Styles';


function LeftSideBar(){
  
  const {userConvos} = useContext(MyContext);

  const classes = useStyles();

  return(
    <div>
      {userConvos ? userConvos.map(usrConvo => <Card className={classes.convoCard}>
            <CardHeader avatar={
              <Avatar className={classes.avatarColor}>
                {usrConvo.title[0]}
              </Avatar>
            }
            title={<Typography variant="body2">{usrConvo.title}</Typography>}
            subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrConvo.description} </Typography>}
            />
        </Card>) : null}
      
    </div>
  )
}


export default LeftSideBar;