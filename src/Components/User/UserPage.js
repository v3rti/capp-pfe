import { Avatar, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './UserPageStyles';


function UserPage(){

  const classes = useStyles();

  return(
    <div>
        <Card className={classes.mainCard}>
          <CardMedia className={classes.cardImage} image="https://source.unsplash.com/1400x300/?nature,water" />
          <CardContent className={classes.contentParent}>
            <Avatar className={classes.avatarProfile} src="https://pbs.twimg.com/profile_images/1305913154787061765/_rJJQtsp_400x400.jpg" />
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