import React, {useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';



  function AllConvos(){

  const [current,setCurrent] = useState({})

  const {id} = useParams();
  // console.log(id);
  
  axios.get(`/convos/${id}`).then(res => setCurrent(res.data));
  


  return(
    <div>
      <h1>You will find all the conversations here {current.title} </h1>
    </div>

  )
}

export default AllConvos;