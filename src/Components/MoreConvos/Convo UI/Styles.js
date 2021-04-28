import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  papersWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  paperEx: {
    width: 1300,
    height: 800,
    backgroundColor: "#D8D8D8",
    
  },
  paperSecond: {
    width: 320,
    height: 800,
    // backgroundColor: "#D0D0D0"
  },
  convoCard: {
    height: 70,
    width: 320,
    borderBottom: "0.5px black solid"
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
    marginTop: "20px",
    marginLeft: "20px",
    height: "auto",
    maxWidth: "500px",
    width: "auto",
    borderRadius: "20px",
    marginBottom: "20px"
  },
  
  textParagraph: {
    padding: "5px",
    marginLeft: "10px"
  },
  anotherWrapper:{
    minWidth: "0px",
    minHeight: "0px",
    backgroundColor: "red",
  },
  usertextField: {
    position: "absolute",
    bottom: 0,
    left: 5,
    width: 1300, 
  },
  actualTextField: {
    
    backgroundColor: "#F5F5F5"
  }
  
})

export default useStyles;