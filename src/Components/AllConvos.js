import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {CardMedia,Card, makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
  fullCard : {
    width: '1200px',
    height: '700px',
    backgroundColor: "grey",
    margin: "auto",
    
  },
  cardImage: {
    width: "800px"
  },
 

})

function AllConvos(){ 
  
  const [current,setCurrent] = useState({});

  useEffect(() =>  {
    if(id !== undefined){
    axios.get(`/convos/${id}`).then(res => setCurrent(res.data));
    console.log("made a post request")
  }
  },[])

  const classes = useStyles();
  const {id} = useParams();
  console.log(id);  
 
  return(
    <div className={classes.wrapper}>
      <Card className={classes.fullCard}>
        <CardMedia className={classes.cardImage} />
      </Card>
    </div>

  )
}

export default AllConvos;