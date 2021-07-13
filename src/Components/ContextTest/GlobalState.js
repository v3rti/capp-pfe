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
  const [userConvos,setUserConvos] = useState([]);
  const [currentConvo,setCurrentConvo] = useState("");
  const [currentConvosJoined,setCurrentConvosJoined] = useState([]);

  useEffect(() => {
    axios.get('/activeConvos/all/').then(res => setUserConvos(res.data));
  },[])

  

  useEffect(() => {
    async function fetching(){
      setIsLoggedIn(localStorage.getItem('loginStatus') === "true");
      
      await axios.get('/status').then(res => {
        setCurrentUser(res.data)
      }).catch(error => {
        setIsLoggedIn(false)
        if(location.pathname !== "/signup"){
          history.push('/login');
        }
      });
    }
    fetching();

  },[])

  useEffect(async ()=> {
    if(isLoggedIn){
      const {email} =  currentUser;
      await axios.post('/status/currentUser',{
        email
      }).then(res => {
      setCurrentConvosJoined(res.data);
      });
    }
 });

  useEffect(async () => {
    // Changes happen here
    if(currentConvo !== undefined){
      await axios.get(`/activeConvos/messages/${currentConvo}`)
      .then(res => setDbMessages(res.data)); 
    }
  },[currentConvo,dbMessages])

  useEffect(() => {
    localStorage.setItem('loginStatus', isLoggedIn);
  })

  return(
    <MyContext.Provider 
    value={{isLoggedIn, setIsLoggedIn,currentUser, setCurrentUser,dbMessages,setDbMessages,userConvos,setUserConvos,currentConvo,setCurrentConvo,currentConvosJoined,setCurrentConvosJoined}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default GlobalState;