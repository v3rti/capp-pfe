import React from 'react';
import {Button, Grid, makeStyles, TextField, Typography} from '@material-ui/core';
import {useState} from 'react';
import axios from 'axios';
import {Alert, AlertTitle} from '@material-ui/lab/';
import {Link, useHistory} from 'react-router-dom';
import uniqid from 'uniqid';
import randomstring from 'randomstring';

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
    }
  }
});


function CreateConvo(){
  
  const classes = useStyles();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [alert,setAlert] = useState(false);
  const [ranId, setRanId] = useState("");
  const history = useHistory();

  const xd = randomstring.generate(8) + uniqid();

  async function handleFormSubmit(e){
    e.preventDefault();
    // Cards += {title, description, image}; To link into a database
    // Setting a random id
   
    setRanId(xd);
    
    const newConvo = {
      title: title,
      description: description,
      image: image,
      cuid: ranId
    }
    
    await axios.post('/convos', newConvo)
    .then(res => console.log(res.data));

    setTitle("");
    setImage("");
    setDescription("");
    setAlert(true);
    setTimeout(() => setAlert(false),5000);
    
    
  }

  
  return(
    <div>
      <p>{randomstring.generate(8) + uniqid()}</p>
      <Grid container>

        {alert ? <Grid item xs={12}>
          <Alert className={classes.notif} severity="success">
            <AlertTitle>Created Successfully</AlertTitle>
            Your Conversation is now Available — <strong className={classes.checkItOut} color="secondary" onClick={() => history.push('/')} >
                check it out!
              </strong>
            
          </Alert>
        </Grid> : null}

        <Grid item xs={12}>
          <form onSubmit={handleFormSubmit}>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)} className={classes.textF} fullWidth variant="outlined" label="Title"/>
            <TextField value={image} onChange={(e) => setImage(e.target.value)} className={classes.textF} fullWidth variant="outlined" label="Image Source"/>
            <TextField value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textF} fullWidth variant="outlined" multiline rows={4} label="Description"/>
            <Button type="submit" className={classes.textF} variant="contained" color="secondary">Create Conversation</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateConvo;