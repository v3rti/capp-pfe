import React, {useEffect, useState} from 'react';
import { Avatar, Card, CardHeader, Typography } from '@material-ui/core';
import useStyles from './Styles';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import ConvoMemberCard from './ConvoMemberCard';
import axios from 'axios';

function ConvoMembers(){
  
  const classes = useStyles();
  let location = useLocation();
  let {id} = useParams();
  const [cMembers,setCMembers] = useState();

  async function fetchMembers(){
    await axios.post('/activeConvos/specificConvo/',{
        convoId: id
    }).then(res => setCMembers(res.data))
  }

  useEffect(() => {
    fetchMembers();
  },[id])

  
  
  return(
    <div>
      {cMembers ? cMembers.map(mmbr => <ConvoMemberCard memberName={mmbr.fullName}/> ) : null}
    </div>
  )


}

export default ConvoMembers;