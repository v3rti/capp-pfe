import React,{useState} from 'react';
import MyContext from './MyContext';

function GlobalState(props){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <MyContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;