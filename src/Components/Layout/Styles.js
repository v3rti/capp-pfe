import {makeStyles} from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: "flex"
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(3)
    },
    appbar: {
      width: `100%`,
      zIndex: 0
    },
    appbarOrigin: {
      width: "100%"
    },
    toolbar: theme.mixins.toolbar,
    date: {
      display: "flex",
      justifyContent:"center",
      flexGrow: 1
    },
    avatar: {
      backgroundColor: "White",
      fontSize: 18,
      color: "#ff4081"
    },
    currentPage: {
      background: "#E8E8E8"
    },
    avaIcon: {
      marginLeft: 5
    }
  }
})

export default useStyles;