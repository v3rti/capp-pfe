import React from 'react';
import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import useStyles from './Styles';

function RequestCard(props){

  const classes = useStyles();

  return(
    <Card className={classes.userCard}>
    <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <div>
            <IconButton>
              <CancelOutlinedIcon className={classes.approveIcons}fontSize="large" />
            </IconButton>
            <IconButton>
              <CheckCircleOutlineOutlinedIcon className={classes.approveIcons} fontSize="large" />
            </IconButton>
          </div>
        }
        title={props.memberName}
        subheader={props.joinDate}
      />
    </Card>
  )


}


export default RequestCard;