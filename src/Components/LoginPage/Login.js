import React, {useContext} from 'react';
import MyContext from '../ContextTest/MyContext';
import LoginForm from './LoginForm';
import {useHistory} from 'react-router-dom';

function Login(){ 

  const {isLoggedIn} = useContext(MyContext);
  const history = useHistory();

  return(<div>
    {isLoggedIn ? history.push('/') : <LoginForm />}
    </div>
  )
}

export default Login;