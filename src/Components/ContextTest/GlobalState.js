import React,{useState, useEffect} from 'react';
import MyContext from './MyContext';
import axios from 'axios';
import {useHistory, useLocation} from 'react-router-dom';

function GlobalState(props){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({fullName:"Full Name"});
  const history = useHistory();
  const location = useLocation();
  const [dbMessages, setDbMessages] = useState([]);

  useEffect(async () => {
    setIsLoggedIn(localStorage.getItem('loginStatus') === "true");
    
    await axios.get('/status').then(res => {
      setCurrentUser(res.data)
    }).catch(error => {
      setIsLoggedIn(false)
      if(location.pathname !== "/signup"){
        history.push('/login');
      }
    });
  },[])

  useEffect(async () => {
    await axios.get('/activeConvos/messages/8lDyXMFYknzadiq2')
    .then(res => setDbMessages(res.data)); 
  },[dbMessages])

  useEffect(() => {
    localStorage.setItem('loginStatus', isLoggedIn);
  })


  

  return(
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn,currentUser, setCurrentUser,dbMessages,setDbMessages}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;