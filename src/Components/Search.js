import React, {useState, useEffect} from 'react';
import Default from './MoreConvos/Default';
import DbConvo from './MoreConvos/DbConvo';
import useStyles from './MoreConvos/DefaultStyle';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Search(){
  const [compo,setCompo] = useState();
  const classes = useStyles();
  const {id} = useParams();
  
  useEffect(() =>  {
    axios.get(`/convos/${id}`).then(res => {
      if(res.data === null){
        setCompo(<Default />)
      }else {
        setCompo(<DbConvo />)
      }
    })
  },[])
  
  return(
    <div className={classes.wrapper}>
      {compo}
    </div>)
}

export default Search;