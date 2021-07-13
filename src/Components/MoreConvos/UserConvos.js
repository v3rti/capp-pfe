import React, {useState, useEffect, useContext} from 'react';
import {Paper, TextField, Typography} from '@material-ui/core';
import useStyles from './Convo UI/Styles';
import RightSideBar from './Convo UI/RightSideBar';
import MyContext from '../ContextTest/MyContext';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import ConvoMembers from './Convo UI/ConvoMembers';

function UserConvo(){
  
  const classes = useStyles();  
  const [msg, setMsg] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const {currentUser,dbMessages,setCurrentConvo,currentConvo} = useContext(MyContext);
  const messagesForms = document.getElementById('messagesForm');
  const {id} = useParams();
  
  
  useEffect(() => {
    setCurrentConvo(id)
    console.log("id is not undefined in here" + id);
  },[id])

  useEffect(() => {
    if(messagesForms) messagesForms.scrollTop = messagesForms.scrollHeight - messagesForms.clientHeight;
    
    if(msg !== ""){
      setFormMsg(<div className={classes.msgWrapper}>
        <Paper className={classes.typingMsgPaper}>
          <Typography variant="body1" color="textSecondary" className={classes.textParagraph}>Someone is typing....</Typography>
        </Paper>
      </div>)
    }else {
      setFormMsg();
    }
    
  },[msg])

  
  
  const handleInputSend = async (e) => {
    if(e.key === 'Enter'){
      const msgDate = new Date(Date.now());
      if(msg.replace(/\s/g, '') !== ""){
      // setUserMsg([...userMsg, {message: msg, user: "random", date: msgDate.toLocaleTimeString()}]);*
      await axios.put(`/activeConvos/chats/${currentConvo}`, {
        message: msg,
        sender: currentUser.username,
        date: msgDate
      }).then(res => console.log(res));
      setMsg("");
      console.log("test from keydown")
    }}
    messagesForms.scrollTop = messagesForms.scrollHeight - messagesForms.clientHeight;
    
  }

  const handleInputChange = (e) => {
    setMsg(e.target.value);
  }

 
  return(
    <div className={classes.papersWrapper}>
      <div className={classes.paperSecond} >
        <RightSideBar />
      </div>
      <Paper id="convoForm" className={classes.paperEx} elevation={3}>
      <div id="messagesForm" className={classes.allMessages}>
        
        {/* Messages sent by user displaying from here */}
        {dbMessages !== undefined ? dbMessages.map(umsg => {
          return <>
          <div className={classes.msgWrapper}>
          <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>
              {umsg.message}
            </Typography>
          </Paper>
        </div>
        <Typography variant="body2" className={classes.textSubParagraph}>
        Sent by {umsg.senderUsername}, {umsg.messageDate}
        </Typography>
        </>

        }) : null}
        
        {formMsg}

        <TextField onKeyDown={handleInputSend} value={msg} onChange={handleInputChange} className={classes.actualTextField} fullWidth label="Type your message.." variant="outlined" color="secondary" />   
      </div>
      </Paper>
      {id !== undefined ? <div className={classes.paperThird}>
      <ConvoMembers /> </div> : null}
      

      

    </div>
  )
}


export default UserConvo;