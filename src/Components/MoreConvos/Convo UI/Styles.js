import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  papersWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  paperEx: {
    width: 1300,
    height: 800,
    backgroundColor: "#B0B0B0"
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
  }
})

export default useStyles;