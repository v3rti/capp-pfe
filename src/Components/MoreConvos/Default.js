import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {CardMedia,Card, CardContent, Typography, Button} from '@material-ui/core'
import useStyles from './DefaultStyle';



function Default(){ 

  const classes = useStyles();

  

  return(
    <div className={classes.wrapper}>
      <Card className={classes.fullCard}>
        <CardMedia className={classes.cardImage} image="https://source.unsplash.com/1400x500">
          <div className={classes.insideImage}>
            <Button className={classes.insideButton} variant="contained" color="secondary">
              Join Conversation
            </Button>
          </div>
        </CardMedia>
        <CardContent>
          <Typography variant="h4">
            Title
          </Typography>
          <Typography variant="body1">
          Pellentesque efficitur eros nec urna rhoncus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a vulputate lacus, nec porttitor lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non nisl nulla. Phasellus semper elit lectus, ac efficitur sapien interdum vel. Quisque cursus magna vitae placerat convallis. Sed ut posuere urna, sit amet cursus lacus. Ut in urna vitae orci tincidunt tempor et non arcu. Vestibulum pretium ex non quam molestie, eget sagittis enim convallis. Duis dui massa, sodales vitae.
          Pellentesque efficitur eros nec urna rhoncus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a vulputate lacus, nec porttitor lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non nisl nulla. Phasellus semper elit lectus, ac efficitur sapien interdum vel. Quisque cursus magna vitae placerat convallis. Sed ut posuere urna, sit amet cursus lacus. Ut in urna vitae orci tincidunt tempor et non arcu.
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
}

export default Default;