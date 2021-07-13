import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  chooseConvos:{

  },
  mainDiv:{
    display: "flex",
    backgroundColor: "whitesmoke",
    width: "600px",
    height: "800px",
    border: "1px solid black",
    borderRadius: "20px",
    flexDirection: "column",
    margin: "0 auto"
  },
  userCard:{
    height: "80px",
    width: "600px",
    borderRadius: "20px",
    marginBottom: "6px"
  },
  approveIcons: {
    color: "#ff4081"
  },
  formControl: {
    minWidth:"250px",
  }
  
})

export default useStyles;