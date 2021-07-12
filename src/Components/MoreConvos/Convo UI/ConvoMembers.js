import React from 'react';
import { Avatar, Card, CardHeader, Typography } from '@material-ui/core';
import useStyles from './Styles';
import {useHistory, useLocation, useParams} from 'react-router-dom';


function ConvoMembers(){
  
  const classes = useStyles();
  let location = useLocation();
  let {id} = useParams();
  
  


  return(
    <div>
      <Card className={classes.memberCard}>
         <CardHeader avatar={
           <Avatar className={classes.memberAvatar}>
             S
           </Avatar>}
          title={<Typography variant="body2">Saad Jass</Typography>}
         />
      </Card>
      <Card className={classes.memberCard}>
         <CardHeader avatar={
           <Avatar className={classes.memberAvatar}>
             M
           </Avatar>}
          title={<Typography variant="body2">Mohamed Amine</Typography>}
         />
      </Card>
      <Card className={classes.memberCard}>
         <CardHeader avatar={
           <Avatar className={classes.memberAvatar}>
             H
           </Avatar>}
          title={<Typography variant="body2">Hamid Art</Typography>}
         />
      </Card>
      <Card className={classes.memberCard}>
         <CardHeader avatar={
           <Avatar className={classes.memberAvatar}>
             K
           </Avatar>}
          title={<Typography variant="body2">Kamal Outh</Typography>}
         />
      </Card>
    </div>
  )


}

export default ConvoMembers;