import React, {useContext, useState} from 'react';
import { Avatar, Card, CardHeader, FormControl, IconButton, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import axios from 'axios';
import MyContext from './ContextTest/MyContext';



const useStyles = makeStyles({
  chooseConvos:{

  },
  mainDiv:{
    display: "flex",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    width: "600px",
    height: "800px",
    margin: "0 auto",
    border: "1px solid black",
    borderRadius: "20px"
    
  },
  userCard:{
    height: "80px",
    width: "600px",
    borderRadius: "20px",
    
  },
  approveIcons: {
    color: "#ff4081"
  },
  formControl: {
    minWidth:"250px",
  }
  
})

function Requests(){

  const classes = useStyles();
  const {currentUser} = useContext(MyContext);
  const [ownedConvos, setOwnedConvos] = useState([]);

  axios.get('/activeConvos/owned/',{
    email: currentUser.email
  }).then(res => setOwnedConvos(res.data))

  return(<div className={classes.mainReal}>
     <div className={classes.chooseConvos}>
    <FormControl className={classes.formControl}>
        <InputLabel>Select Conversation</InputLabel>
        <Select
          // value={age}
          // onChange={handleChange}
        >
         {ownedConvos.map(conv => <MenuItem value={conv.cuid}>{conv.title}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  <div className={classes.mainDiv}>
 
    <Card className={classes.userCard}>
    <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <div>
            <IconButton>
              <CancelOutlinedIcon className={classes.approveIcons}fontSize="large" />
            </IconButton>
            <IconButton>
              <CheckCircleOutlineOutlinedIcon className={classes.approveIcons} fontSize="large" />
            </IconButton>
          </div>
        }
        title="Said something"
        subheader="September 14, 2016"
        subheader="September 14, 2016"
      />
    </Card>

  </div>
  </div>)
}

export default Requests;