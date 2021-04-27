import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  fullCard : {
    width: '1400px',
    height: '750px',
    backgroundColor: "grey",
    margin: "auto",
  },
  cardImage: {
    objectFit: "cover",
    backgroundColor: "red",
    width: "1400px",
    height: "500px"
  },
  insideImage: {
    display: "flex",
    justifyContent: "flex-end"
    
  },
  insideButton: { 
    margin: 20,
    borderRadius: 8,
    justifyContent: "center",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)"
  }

})

export default useStyles;