import React, {useContext} from 'react';
import MyContext from '../ContextTest/MyContext';



function Logout(){

  const {isLoggedIn, setIsLoggedIn} = useContext(MyContext);

  return(<>
    You Are now logged out.
    
    {isLoggedIn ? setIsLoggedIn(false) : null}
  </>)

}

export default Logout;