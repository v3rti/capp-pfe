import React from 'react';
import {Avatar, Card, CardHeader, Typography} from '@material-ui/core';

import useStyles from './Styles';



function LeftSideBar(){
  
  const classes = useStyles();

  return(
    <div>
      <Card className={classes.convoCard}>
            <CardHeader avatar={
              <Avatar>
                T
              </Avatar>
            }
            title={<Typography variant="body2">Some</Typography>}
            subheader={<Typography variant="body2" color="textSecondary" noWrap>Random User: Latest Message Sent </Typography>}
            />
        </Card>
        <Card className={classes.convoCard}>
            <CardHeader avatar={
              <Avatar className={classes.avatarColor}>
                A
              </Avatar>
            }
            title={<Typography variant="body2">Conversation 2</Typography>}
            subheader={<Typography variant="body2" color="textSecondary" noWrap>Random User: Another message </Typography>}
            />
        </Card>
        <Card className={classes.convoCard}>
            <CardHeader avatar={
              <Avatar className={classes.avatarColorTest}>
                J
              </Avatar>
            }
            title={<Typography variant="body2">Coders Convo</Typography>}
            subheader={<Typography variant="body2" color="textSecondary" noWrap>Random User: Js goes brrr </Typography>}
            />
        </Card>
    </div>
  )
}


export default LeftSideBar;