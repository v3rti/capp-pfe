import React,{useState, useEffect} from 'react';
import MyContext from './MyContext';
import axios from 'axios';
import {useHistory, useLocation} from 'react-router-dom';

function GlobalState(props){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loginStatus') === "true");
    
    axios.get('/status').then(res => {
      setCurrentUser(res.data)
    }).catch(error => {
      setIsLoggedIn(false)
      if(location.pathname !== "/signup"){
        history.push('/login');
      }
    });
    
    
    
  }, [])

  useEffect(() => {
    localStorage.setItem('loginStatus', isLoggedIn);
  })


  

  return(
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn,currentUser, setCurrentUser}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;