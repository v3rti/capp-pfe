import React from 'react';
import { Avatar, Card, CardHeader, Typography } from '@material-ui/core';
import useStyles from './Styles';


function ConvoMemberCard(props){

  const classes = useStyles();

  return(
    <Card className={classes.memberCard}>
         <CardHeader avatar={
           <Avatar className={classes.memberAvatar}>
             {props.memberName[0]}
           </Avatar>}
          title={<Typography variant="body2">{props.memberName}</Typography>}
         />
      </Card>
  )


}


export default ConvoMemberCard;