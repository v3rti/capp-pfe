import React, {useContext, useState, useEffect} from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import useStyles from './Requests/Styles';
import axios from 'axios';
import MyContext from './ContextTest/MyContext';
import RequestCard from './Requests/RequestCard';
import Alert from '@material-ui/lab/Alert';


function Requests(){


  const classes = useStyles();
  const {currentUser,setCurrentUser} = useContext(MyContext);
  const [ownedConvos, setOwnedConvos] = useState([]);
  const [waitingList,setWaitingList] = useState([]);
  const [selectedConvo,setSelectedConvo] = useState("aaaaa");
  const [startShow,setStartShow] = useState(false);
  const [activateAlert,setActivateAlert] = useState(0);

  async function fetching(){
    await axios.post('/activeConvos/owned/',{
      email: currentUser.email
    }).then(res => setOwnedConvos(res.data)).catch(err => setOwnedConvos(""));
  }
  
  useEffect(() => {
    fetching();
  },[currentUser])

  useEffect(() => {
    if(selectedConvo !== "aaaaa"){
    axios.post('/activeConvos/ownedWaitingList/',{
      email: currentUser.email,
      convoId: selectedConvo
    }).then(res => {
      setWaitingList(res.data);
      setStartShow(true);
    }).catch(err => setWaitingList(""))}else{
      setStartShow(false)
    }
  },)


  const changeConvo = (e) => {
    
    setSelectedConvo(e.target.value);
    if(e.target.value !== "aaaaa"){
    axios.post('/activeConvos/ownedWaitingList/',{
      email: currentUser.email,
      convoId: e.target.value
    }).then(res => {
      setWaitingList(res.data);
      setStartShow(true);
    }).catch(err => setWaitingList(""))}else{
      setStartShow(false)
    }

    console.log(selectedConvo);
  }

  const reqDeny = (e) => {
    console.log("Denied",e);

    axios.post('/activeConvos/waitDenied/',{
      email: e,
      convoId: selectedConvo,
    }).then(res => console.log(res.data))
    
    setActivateAlert(-1);
    setTimeout(() => setActivateAlert(0),5000);
    
  };

  const reqAccept = (e) => {
    console.log("Accepted",e)
    
    axios.post('/activeConvos/waitAccept/',{
      email: e,
      convoId: selectedConvo,
      joinedDate: Date.now()
    }).then(res => console.log(res.data))
    
    setActivateAlert(1);
    setTimeout(() => setActivateAlert(0),5000);
  };

  return(
  <div className={classes.mainReal}>
    <div className={classes.alertDiv}>
      {activateAlert === 1 ? <Alert severity="success">User's Request Successfully Accepted!</Alert>
      : activateAlert === -1 ? <Alert severity="info">User's Request Successfully Denied!</Alert> : null}
    </div>
     <div className={classes.chooseConvos}>
    <FormControl className={classes.formControl}>
        <InputLabel>Select Conversation</InputLabel>
        <Select
          value={selectedConvo}
          onChange={changeConvo}
        >
          <MenuItem value="aaaaa">Choose a Conversation</MenuItem>
         {ownedConvos.map(conv => {
           return <MenuItem value={conv.cuid}>{conv.title}</MenuItem>
         })}
          
        </Select>
      </FormControl>
    </div>
    <div className={classes.mainDiv}>
      {
      startShow ? waitingList.map(member => member.map((waiting) => <RequestCard 
        acceptRequest={reqAccept} 
        denyRequest={reqDeny}
        memberName={waiting.email} 
        joinDate={waiting.joinedDate}
      />)) 
      : null}
    </div>
  </div>
  )
}

export default Requests;