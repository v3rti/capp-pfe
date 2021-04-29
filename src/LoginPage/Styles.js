import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  wrapper:{
    width: "600px",
    margin: "auto",
    height: "600px",
    backgroundColor: "#FFFAFA",
    border: "0.5px solid black"
  },
  loginForm: {
    display: "flex",
    flexDirection:"column",
    marginTop: "60px",
    padding: "20px",
    width: "auto"
  },
  loginButton: {
    margin:"50px 100px"
  },
  loginInputs: {
    margin: "20px 100px"
  },
  textTitle: {
  display: "flex",
   justifyContent: "center",
   marginTop: "50px"
    
  }

});

export default useStyles;