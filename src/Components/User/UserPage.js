import { Avatar, Button, Card, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './UserPageStyles';


function UserPage(){

  const classes = useStyles();

  return(
    <div>
      
        <Card className={classes.mainCard}>
          <CardMedia className={classes.cardImage} image="https://source.unsplash.com/1400x300/?nature,water" />
          <CardContent className={classes.contentParent}>
            <Avatar className={classes.avatarProfile} src="https://previews.123rf.com/images/ervinm/ervinm1709/ervinm170900008/86900230-wolf-face-vector-illustration.jpg" />
            <Typography variant="h5" className={classes.fullName}>
              User Full Name ?
            </Typography>
            <Typography variant="body1" color="textSecondary" className={classes.profileBio}>
              Bio in here: What's the point of climbing when you're worried if the drop hurt.
            </Typography>
            <Button className={classes.followButton} variant="contained" color="secondary">
              Follow
            </Button>
            <Button className={classes.editButton} variant="contained" color="secondary">
              Edit My Profile
            </Button>
          </CardContent>
        </Card>
      
    </div>
  )
}

export default UserPage;