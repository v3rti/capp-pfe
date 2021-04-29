import React, {useContext} from 'react'
import {Button, IconButton, makeStyles} from '@material-ui/core'
import Pages from './Pages';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {AppBar, Toolbar} from '@material-ui/core'
import {Avatar} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';
import MyContext from './ContextTest/MyContext';


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
      width: `calc(100% - ${drawerWidth}px)`,
      
    },
    toolbar: theme.mixins.toolbar,
    date: {
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

function NewNav({children}) {
  
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const {isLoggedIn, setIsLoggedIn} = useContext(MyContext);
  let loginStatus;

  const handleLink = (item) => {
    history.push(item.path);
  }

  const handleCurrentPage = (item) => {
    if(location.pathname === item.path){
      return classes.currentPage
    }
    else {
      return null
    }
  }

  isLoggedIn ? loginStatus = "Log out" : loginStatus = "Log in"


  return (
    <div className={classes.root}>
      {/* app bar */}
      
      <AppBar
       elevation
        className={classes.appbar}
        color="secondary"
      >

        <Toolbar>
          <Typography className={classes.date}>
              New day, new opportunity
          </Typography>
          
          {isLoggedIn ? 
          <>
          <Typography end>My Profile</Typography>  
          <IconButton className={classes.avaIcon}>
          <Avatar
          button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className={classes.avatar}
           >
             M
           </Avatar>
           </IconButton>
           </>
           : <Button variant="contained" onClick={() => history.push('/Login')}>Log in</Button>}
        </Toolbar>
      </AppBar>

      {/* side drawer */}

      <Drawer 
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper
      }}
      >
        <div>
          <Typography className={classes.title} variant="h5">
            Conversation VIP
          </Typography>
        </div>

        {/* list / links */}

        <List>
          {Pages.map(item => {
            return <ListItem button
            className={handleCurrentPage(item)}
            onClick={() => handleLink(item)}
            >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
          })}
        </List>

      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default NewNav