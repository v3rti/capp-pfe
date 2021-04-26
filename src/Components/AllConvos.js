import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';



function AllConvos(){ 
  const [current,setCurrent] = useState({})
  useEffect(() =>  {
    if(id !== undefined){
      axios.get(`/convos/${id}`).then(res => setCurrent(res.data));
      console.log("made a post request")
    }
  },[])

  

  const {id} = useParams();
  console.log(id);  
  
  


  
  


  return(
    <div>
      <h1>You will find all the conversations here</h1>
    </div>

  )
}

export default AllConvos;