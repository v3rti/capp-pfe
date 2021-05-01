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
    margin:"40px 100px",
    paddingTop:"10px",
    paddingBottom: "10px"
  },
  loginInputs: {
    margin: "20px 100px"
  },
  textTitle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  signUpForm: {
    display: "flex",
    flexDirection:"column",
    marginTop: "40px",
    padding: "20px",
    width: "auto",
    
  },
  signupWrapper: {
    width: "800px",
    margin: "auto",
    height: "800px",
    backgroundColor: "#FFFAFA",
    border: "0.5px solid black"
  },
  checkBox: {
    margin:"0 100px"
  },
  redirectMessage: {
    cursor: "pointer"
  },
  notif: {
    width: "800px",
    margin: "0 auto",
    marginBottom: "20px"
  },
  errorMessage: {
    color: "red",
    margin: "0 100px"
  }

});

export default useStyles;