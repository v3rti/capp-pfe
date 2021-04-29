import React,{useState, useEffect} from 'react';
import MyContext from './MyContext';

function GlobalState(props){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('loginStatus') === "true");
  }, [])

  useEffect(() => {
    localStorage.setItem('loginStatus', isLoggedIn);
  })

  return(
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;