import React from 'react'
import {makeStyles} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';

import {AppBar, Toolbar} from '@material-ui/core'

import {Avatar} from '@material-ui/core';
import { red } from '@material-ui/core/colors';



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
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2),
      backgroundColor: "red",
      fontSize: 18
    }
  }
})

function NewNav({children}) {
  
  const classes = useStyles();
  

  const menuItems = [
    {
      text: 'View Conversations',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'New Conversation',
      icon: <AddCircleOutline color="secondary" />,
      path: '/create'
    },
  ]

  

  return (
    <div className={classes.root}>
      {/* app bar */}
      
      <AppBar
       elevation
        className={classes.appbar}
      >

        <Toolbar>
          <Typography className={classes.date}>
              Today is the 
          </Typography>
          <Typography
          end
          >
            Mario
          </Typography>
          <Avatar 
          className={classes.avatar}
           >
             M
           </Avatar>
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
          {menuItems.map(item => {
            return <ListItem button>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
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