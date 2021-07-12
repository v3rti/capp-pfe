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
    border: "1px solid black"
  }
  
})


function HomePage(){

  const [cookies,setCookies] = useState();


  const classes = useStyles();
  const history = useHistory();
  const {currentUser,userConvos,currentConvosJoined,setCurrentConvosJoined} = useContext(MyContext);
  const [userJoined,setUserJoined] = useState(0);
  const [alreadyJoined,setAlreadyJoined] = useState(false);
  const [usrConvs,setUsrConvos] = useState([]);
  const [found,setFound] = useState();

  let xd = false;
  
  const userJoiningConvo = (cid) => {
    currentConvosJoined.map(curr => {
      if(curr.convo_id === cid){
        xd = true;
      }
    })
    joining(cid);
  }
 
  const joining = async (id) => {
    if(xd){
      setUserJoined(-1);
      setTimeout(() => setUserJoined(0),5000)
      xd = false;
    }else{
      await axios.post('/activeConvos/waitinglist/',{
        convoId: id,
        email: currentUser.email
      }).then(async res => {
        if(res.data){
          setUserJoined(2);
          setTimeout(() => setUserJoined(0),5000)
        }else{
          await axios.put(`/activeConvos/userjoinwait/${id}`, {
            email: currentUser.email,
            joinedDate: Date.now()
          }).then( res => {
            if(res.data.nModified === 1){
              setUserJoined(1);
              setTimeout(() => setUserJoined(0),5000)
              console.log("Sent to the waitlist")
            }else{
              setUserJoined(false);
              console.log("User not joined");
            }
          })
          .catch(err => console.log(err)) 
        }
      });

      
  
      
      // axios.put('/users/joins/', {
      //   convo_id: id,
      //   joined_date: Date.now(),
      //   email: currentUser.email
      // }).then(res => console.log(res)).catch(err => console.log(err));
    }
  }
  
  return(
    <div>
    {userJoined === 1 ? <Alert className={classes.joininAlert} severity="success">Joining Request Sent! Waiting Approval From Admin</Alert> : userJoined === -1 ?
    <Alert className={classes.joininAlert} severity="error">You are already a memeber of this conversation!</Alert> : userJoined === 2 ?<Alert className={classes.joininAlert} severity="warning">You are on the waitlist of this conversation!</Alert> : null }

    <div className={classes.cardsWrapper}>
 
    {userConvos.map(card => {
        if(card.isPublic) return (
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