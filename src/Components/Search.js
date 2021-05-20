import React from 'react';
import useStyles from './MoreConvos/DefaultStyle';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Search(){
 
  const classes = useStyles();
  const {id} = useParams();

  
  return(
    <div className={classes.wrapper}>
      Will refactor later
    </div>)
}

export default Search;