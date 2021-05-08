import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  papersWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  paperEx: {
    position: "relative",
    width: 1300,
    height: 800,
    backgroundColor: "grey",
    
  },
  allMessages: {
    overflowY: "auto",
    height: "740px"
  },
  paperSecond: {
    marginLeft: "4px",
    width: 320,
    height: 800,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center"
  },
  convoCard: {
    height: 70,
    width: 305,
    borderRadius: "25px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  avatarColor: {
    backgroundColor: "red"
  },
  avatarColorTest: {
    backgroundColor: "green"
  },
  avatarColorTest: {
    backgroundColor: "green"
  },
  avatarRan: {
    backgroundColor: "skyblue"
  },

  msgWrapper: {
    
    width:"fit-content"
  },
  
  msgPaper: {
    paddingRight: "4px",
    paddingLeft: "4px",
    marginTop: "20px",
    marginLeft: "20px",
    height: "auto",
    maxWidth: "500px",
    width: "auto",
    borderRadius: "20px",
    marginBottom: "20px",
    backgroundColor: "#F5F5F5",
  },
  typingMsgPaper: {
    paddingRight: "4px",
    marginTop: "20px",
    marginLeft: "20px",
    height: "auto",
    maxWidth: "500px",
    width: "auto",
    marginBottom: "20px",
    borderRadius: "50px"
  },
  textParagraph: {
    padding: "5px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  
  anotherWrapper:{
    minWidth: "0px",
    minHeight: "0px",
    backgroundColor: "red",
  },
  
  actualTextField: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 1300, 
    borderRadius: "10px",
    backgroundColor: "#F5F5F5"
  },
  icon: {
    fontSize: "50px"
  },
  textSubParagraph: {
    marginLeft: 30,
    marginTop: -12,
    marginBottom: -10
  }
  
})

export default useStyles;