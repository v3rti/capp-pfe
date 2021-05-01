import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  
  mainCard: {
    width: "1400px",
    backgroundColor: "",
    margin: "0 auto",
    height: "700px",
    position: "relative",
    borderRadius: "20px"
  },
  cardImage: {
    height: "300px",
    width: "auto",
    objectFit: "fill",
    
  },
  contentParent: {
    position: "relative"
  },
  avatarProfile: {
    height: "200px",
    width: "200px",
    border: "7px solid #f50057",
    position: "absolute",
    top: "-95px",
    left: "20px"
  },
  fullName: {
    position: "absolute",
    left: "270px",
  },
  profileBio: {
    position: "absolute",
    left: "270px",
    top: "51px"
  },
  followButton: {
    position: "absolute",
    left: "1280px",
    borderRadius: "10px"
  },
  editButton: {
    position: "absolute",
    left: "1100px",
    borderRadius: "10px"
  }

});



export default useStyles;