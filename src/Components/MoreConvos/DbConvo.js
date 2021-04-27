import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {CardMedia,Card, CardContent, Typography, Button} from '@material-ui/core'
import useStyles from './DefaultStyle';



function DbConvo(){ 
  
  const [current,setCurrent] = useState({});
  

  useEffect(() =>  {
    
    axios.get(`/convos/${id}`).then(res => {
      setCurrent(res.data)
    });
    // console.log("made a post request")
  },[])

  const classes = useStyles();
  const {id} = useParams();
  
  
 
  return(
    <div className={classes.wrapper}>
      <Card className={classes.fullCard}>
        <CardMedia className={classes.cardImage} image={current.image} >
          <div className={classes.insideImage}>
            <Button className={classes.insideButton} variant="contained" color="secondary">
              Join Conversation
            </Button>
          </div>
        </CardMedia>
        <CardContent>
          <Typography variant="h4">
            {current.title}
          </Typography>
          <Typography variant="body1">
            {current.description}
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
}

export default DbConvo;