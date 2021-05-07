import React, {useState, useEffect} from 'react';
import {Paper, TextField, Typography} from '@material-ui/core';
import useStyles from './Convo UI/Styles';
import RightSideBar from './Convo UI/RightSideBar';


function UserConvo(){
  
  const classes = useStyles();  
  const [msg, setMsg] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [userMsg, setUserMsg] = useState([]);

  useEffect(() => {
    const messagesForms = document.getElementById('messagesForm');
    messagesForms.scrollTop = messagesForms.scrollHeight - messagesForms.clientHeight;

    if(msg !== ""){
      setTimeout(() => setFormMsg(<div className={classes.msgWrapper}>
        <Paper className={classes.typingMsgPaper}>
          <Typography variant="body1" color="textSecondary" className={classes.textParagraph}>Someone is typing....</Typography>
        </Paper>
      </div>),100)
    }else {
      setTimeout(() => setFormMsg(),100)
    }
  },[msg])
  
  const handleInputSend = (e) => {
    if(e.key === 'Enter'){
      if(msg.replace(/\s/g, '') !== ""){
      setUserMsg([...userMsg, {message: msg, user: "random"}]);
      setMsg("");
    }}
  }

  const handleInputChange = (e) => {
    setMsg(e.target.value);
  }

 
  return(
    <div className={classes.papersWrapper}>
      <Paper id="convoForm" className={classes.paperEx} elevation={3}>
      <div id="messagesForm" className={classes.allMessages}>
        <div className={classes.msgWrapper}>
          <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Some message in hereSome message in hereSome message in hereSome message in hereSome message in here more text here </Typography>
          </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Testing small text</Typography>
        </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>Testing a very long text here  Aliquam id commodo tortor, vel euismod dui. Mauris eget ex id massa placerat rutrum in vel purus. Donec luctus tincidunt aliquam. Nullam vulputate aliquam diam vitae lacinia. Pellentesque convallis dictum nisl, a cursus felis commodo quis. Nulla tellus ante, finibus quis vehicula eget, convallis at velit</Typography>
        </Paper>
        </div>
        <div className={classes.msgWrapper}>
        <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>1WORD</Typography>
        </Paper>
        </div>
        {/* Messages sent by user displaying from here */}
        {userMsg !== undefined ? userMsg.map(umsg => {
          return <div className={classes.msgWrapper}>
          <Paper className={classes.msgPaper}>
            <Typography variant="body1" className={classes.textParagraph}>
              {umsg.message}
            </Typography>
          </Paper>
        </div>
        }) : null}
        
        {formMsg}

        <TextField onKeyDown={handleInputSend} value={msg} onChange={handleInputChange} className={classes.actualTextField} fullWidth label="Type your message.." variant="outlined" color="secondary" />   
      </div>
      </Paper>

      <div className={classes.paperSecond} >
        <RightSideBar />
      </div>

    </div>
  )
}


export default UserConvo;