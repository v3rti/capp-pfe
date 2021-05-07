import React,{useState, useEffect} from 'react';
import MyContext from './MyContext';
import axios from 'axios';

function GlobalState(props){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loginStatus') === "true");
    
    
    console.log(currentUser);
    
  }, [])

  useEffect(() => {
    localStorage.setItem('loginStatus', isLoggedIn);
    axios.get('/status').then(res => setCurrentUser(res.data))
  })


  

  return(
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn,currentUser, setCurrentUser}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;