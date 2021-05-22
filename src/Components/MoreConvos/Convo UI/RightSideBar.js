import React,{useEffect, useState, useContext} from 'react';
import {Avatar, Card, CardHeader, Typography} from '@material-ui/core';
import MyContext from '../../ContextTest/MyContext';
import useStyles from './Styles';
import {useHistory} from 'react-router-dom';

function LeftSideBar(){
  
  const {userConvos,currentUser} = useContext(MyContext);
  const classes = useStyles();
  const history = useHistory();
  const [convosList,setConvosList] = useState([]);
  


  return(
    <div>
      {/* {console.log(userConvos.map(conv => conv.users_joined.map(usr => {
        if(usr.username === "medbagui1"){
          return conv;
        }
      })))} */}

      {userConvos ? userConvos.map(usrConvo => {
      return usrConvo.users_joined.map(usr => {
      if(usr.username === currentUser.username){
        return <Card onClick={() => {
          history.push(`/conversations/${usrConvo.cuid}`)
       }} className={classes.convoCard}>
             <CardHeader avatar={
               <Avatar className={classes.avatarColor}>
                 {usrConvo.title[0]}
               </Avatar>
             }
             title={<Typography variant="body2">{usrConvo.title}</Typography>}
             subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrConvo.description} </Typography>}
             />
        </Card>
      }
      else{
        
      }})}) : null}
      
    </div>
  )
}


export default LeftSideBar;