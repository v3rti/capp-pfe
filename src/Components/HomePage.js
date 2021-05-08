import React, {useEffect, useState, useContext} from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import MyContext from './ContextTest/MyContext';
import Login from './LoginPage/Login';
import axios from 'axios';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles({
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center"
    
  },
  cardExample: {
    margin: 15,
    width: 320
  },
  cardMediaImage: {
    height: 180,
    
  },
  cardButtons: {
    justifyContent: "center",
    
    padding: 10
  },
  buttons:{
    width: '50%',
    
  },
  descriptionText: {
    lineHeight: 1.5,
    height: 60,      /* height is 2x line-height, so two lines will display */
    overflow: "hidden"  /* prevents extra lines from being visible */
  },
  joininAlert: {
    width: "70%",
    margin: "0 auto",
    border: "1px solid #89cb8b"
  }
  
})


function HomePage(){

  const [cookies,setCookies] = useState();


  const classes = useStyles();
  const [convos,setConvos] = useState([]);
  const history = useHistory();
  const {isLoggedIn, setIsLoggedIn, currentUser} = useContext(MyContext);
  const [userJoined,setUserJoined] = useState(false);
  
 

  useEffect(() => {
    fetch('/convos')
    .then(res => res.json())
    .then(data => setConvos(data));
  },[])

  

  const userJoiningConvo = (convId) => {
    
      axios.put(`/activeConvos/userjoin/${convId}`, {
        fullName: currentUser.fullName,
        username: currentUser.username,
        joinedDate: Date.now()
      }).then(res => {
        if(res.data.nModified === 1){
          setUserJoined(true);
          setTimeout(() => setUserJoined(false),5000)
          console.log("User joined")
        }else{
          setUserJoined(false);
          console.log("User not joined");
        }
      })
      .catch(err => console.log(err));
    
  }

  return(
    <div>
    {userJoined ? <Alert className={classes.joininAlert} severity="success">You have successfully joined</Alert> : null}
    <div className={classes.cardsWrapper}>
 
      {convos.map(card => {
        return (
        <Card className={classes.cardExample}>
          <CardMedia className={classes.cardMediaImage} image={card.image} />
          <CardContent>
            <Typography variant="h5">
              {card.title}
            </Typography>
            <Typography className={classes.descriptionText}  variant="body2" color="textSecondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardButtons}>
            <Button onClick={() => userJoiningConvo(card.cuid)} className={classes.buttons} color="secondary" variant="outlined">
              Join Convo
            </Button>
            <Button className={classes.buttons} color="secondary" variant="outlined" onClick={() => history.push(`/conversations/${card.cuid}`)}>
              More Details
            </Button>
          </CardActions>
        </Card>
        
        )
      })}

      
    </div>
    </div>
  )
}

export default HomePage;