import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import Default from './MoreConvos/Default';
import DbConvo from './MoreConvos/DbConvo';
import UserConvos from './MoreConvos/UserConvos';
import ErrorConvo from './MoreConvos/ErrorConvo';

import useStyles from './MoreConvos/DefaultStyle';


function AllConvos(){ 
  const [compo,setCompo] = useState();
  const classes = useStyles();

  const {id} = useParams();

  useEffect(() =>  {

    console.log(id);

    if(id !== undefined){
    axios.get(`/convos/${id}`).then(res => {
      if(res.data === null){
        
      }else {
        setCompo(<UserConvos />);
      }
    })}
    else{
      setCompo(<UserConvos />);
    }
  },[])
  
  
  
  return(
    <div className={classes.wrapper}>
      {compo}
    </div>

  )
}

export default AllConvos;