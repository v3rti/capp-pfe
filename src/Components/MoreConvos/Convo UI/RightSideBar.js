import React,{useEffect, useState, useContext} from 'react';
import {Avatar, Card, CardHeader, Typography} from '@material-ui/core';
import MyContext from '../../ContextTest/MyContext';
import useStyles from './Styles';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function LeftSideBar(){
  
  const {userConvos,currentUser,setCurrentConvosJoined,currentConvosJoined} = useContext(MyContext);
  const [testCurr,setTestCurr] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(async ()=> {
    const {email} = currentUser;
    await axios.post('/status/currentUser',{
      email
    }).then(res => {
      setCurrentConvosJoined(res.data);
    });
  },[]);

  return(
    <div>
      {/* {console.log(userConvos.map(conv => conv.users_joined.map(usr => {
        if(usr.username === "medbagui1"){
          return conv;
        }
      })))} */}

        {userConvos && currentConvosJoined ? userConvos.map(usrCo => {
          return currentConvosJoined.map(currJoined => {
            if(currJoined.convo_id === usrCo.cuid){
                return <Card onClick={() => {
                  history.push(`/conversations/${usrCo.cuid}`)
              }} className={classes.convoCard}>
                    <CardHeader avatar={
                      <Avatar className={classes.avatarColor}>
                        {usrCo.title[0]}
                      </Avatar>
                    }
                    title={<Typography variant="body2">{usrCo.title}</Typography>}
                    subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrCo.description} </Typography>}
                    />
                </Card>
            }
          })
        })

        : null}

  
        
      
    </div>
  )
}


export default LeftSideBar;