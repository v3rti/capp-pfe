import React from 'react';
import {Button, Grid, makeStyles, TextField} from '@material-ui/core';
import {useState} from 'react';
import axios from 'axios';
import {Alert, AlertTitle} from '@material-ui/lab/';

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
    }
  }
});


function CreateConvo(){
  
  const classes = useStyles();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [alert,setAlert] = useState(false);


  async function handleFormSubmit(e){
    e.preventDefault();
    // Cards += {title, description, image}; To link into a database

    const newConvo = {
      title: title,
      description: description,
      image: image
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
      <Grid container>

        {alert ? <Grid item xs={12}>
          <Alert className={classes.notif} severity="success">
            <AlertTitle>Created Successfully</AlertTitle>
            Your Conversation is now Available — <strong>check it out!</strong>
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