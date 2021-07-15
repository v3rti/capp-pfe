import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  papersWrapper: {
    display: "flex",
    justifyContent: "center",
    position: "relative"
  },
  paperEx: {
    position: "relative",
    width: 1000,
    height: 800,
    backgroundColor: "#D3D3D3",
    
  },
  allMessages: {
    overflowY: "auto",
    height: "740px"
  },
  paperSecond: {
    marginRight: "4px",
    width: 280,
    height: 800,
    backgroundColor: "#DCDCDC",
    display: "flex",
    justifyContent: "center",
    borderRadius: '2.5%'
  },
  paperSecondv2: {
    marginRight: "4px",
    width: 1000,
    height: 800,
    backgroundColor: "#DCDCDC",
    display: "flex",
    justifyContent: "center",
    borderRadius: '2.5%'
  },
  convoCard: {
    marginTop: "4px",
    height: 60,
    width: 270,
    borderRadius: "25px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  convoCardv2: {
    marginTop: "4px",
    height: 60,
    width: 970,
    borderRadius: "25px",
    cursor: "pointer",
    marginBottom: "5px",
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  avatarColor: {
    backgroundColor: "#F50057"
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
    width: 1000, 
    borderRadius: "10px",
    backgroundColor: "#F5F5F5"
  },
  icon: {
    fontSize: "50px"
  },
  textSubParagraph: {
    marginLeft: 30,
    marginTop: -15,
    marginBottom: 10
  },
  paperThird: {
    marginLeft: "4px",
    width: 220,
    height: 800,
    backgroundColor: "#e0e0e0",
    display: "flex",
    justifyContent: "center",
    borderRadius: '2.5%',
  },
  memberCard: {
    width: 200,
    height: 44,
    display:"flex",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius:"10px",
    padding: 0,
  },
  memberAvatar: {
    backgroundColor: "white",
    color: "#F50057",
    border: "2px solid #F50057",
    height:30,
    width: 30
  },
  conversationsRed: {
    width: 280,
    height: 50,
    backgroundColor: "#F50057",
    position: "absolute",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: 600,
    borderRadius: '2.5%'
  },
  conversationsRedv2: {
    width: 1000,
    height: 50,
    backgroundColor: "#F50057",
    position: "absolute",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: 600,
    borderRadius: '2.5%'
  },
  membersRed: {
    width: 220,
    height: 50,
    backgroundColor: "#F50057",
    position: "absolute",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: 600,
    borderRadius: '2.5%'
  },
  elementsConvMmbrs: {
   marginTop: 54,
   overflowY: "scroll",
   overflowX: "hidden",
   maxHeight: 800,
  }
})

export default useStyles;