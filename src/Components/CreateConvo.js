import React from 'react';
import {Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField} from '@material-ui/core';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Alert, AlertTitle} from '@material-ui/lab/';
import {useHistory} from 'react-router-dom';
import uniqid from 'uniqid';
import randomstring from 'randomstring';
import MyContext from './ContextTest/MyContext'


const useStyles = makeStyles(theme => {
  return {
    textF: {
      margin: "auto",
      display: "block",
      width: 700,
      marginBottom: 20
    },
    notif: {
      width: 700,
      margin: "auto",
      marginBottom: 20
    },
    checkItOut: {
      cursor: "pointer"
    },
    privacyFormControl:{
      width: 700,
      display: "block",
      marginTop: "20px",
      margin: "0 auto",
      marginBottom: "50px"
    },
    
    
    
  }
});


function CreateConvo(){
  const {currentUser} = useContext(MyContext);
  const [ranId, setRanId] = useState("");
  const classes = useStyles();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [isPublic,setIsPublic] = useState(true);

  const [alert,setAlert] = useState(false);
  const history = useHistory();


  useEffect(() => {
    setRanId(randomstring.generate(8) + uniqid());
    
  },[])

  
  

  async function handleFormSubmit(e){
    
    e.preventDefault();
    // Cards += {title, description, image}; To link into a database
    // Setting a random id

    const newConvo = {
      title,
      description,
      image,
      cuid: ranId,
      owner: currentUser.email,
      isPublic,
      currentUser
    }
    // const convoJoined = { START FROM HERE
    //   convos_joined: cuid
    // }
    
    await axios.post('/activeConvos/createConvo', newConvo)
    .then(res => console.log(res.data));
    
    await axios.put('/users/joins', {
      username: currentUser.email,
      convo_id: ranId,
      joined_date: Date.now()
    }).then(res => console.log(res.data));

    await axios.put('/users/joins/', {
      convo_id: ranId,
      joined_date: Date.now(),
      email: currentUser.email
    }).then(res => console.log(res)).catch(err => console.log(err));

    setTitle("");
    setImage("");
    setDescription("");
    setAlert(true);
    setTimeout(() => setAlert(false),5000);
  }

  
  return(
    <div>
      <p></p>
      <Grid container>

        {alert ? <Grid item xs={12}>
          <Alert className={classes.notif} severity="success">
            <AlertTitle>Created Successfully</AlertTitle>
            Your Conversation is now Available — <strong className={classes.checkItOut} color="secondary" onClick={() => history.push(`/conversations/${ranId}`)} >
                check it out!
              </strong>
            
          </Alert>
        </Grid> : null}

        <Grid item xs={12}>
          <form onSubmit={handleFormSubmit}>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={classes.textF} fullWidth variant="outlined" label="Title"/>
            <TextField value={image} onChange={(e) => setImage(e.target.value)} className={classes.textF} fullWidth variant="outlined" label="Image Source"/>
            <TextField value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textF} fullWidth variant="outlined" multiline rows={4} label="Description"/>
            
            <FormControl className={classes.privacyFormControl}>
              <InputLabel className={classes.privacyLabel}>Conversation Privacy</InputLabel>
              <Select value={isPublic} onChange={(e) => {
                 setIsPublic(e.target.value)
                 console.log(currentUser.username)
                 }}>
                <MenuItem value={true}>Public</MenuItem>
                <MenuItem value={false}>Private</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" className={classes.textF} variant="contained" color="secondary">Create Conversation</Button>
            
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateConvo;