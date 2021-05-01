import React, {useContext} from 'react'
import {Button, IconButton} from '@material-ui/core'
import Pages from '../Pages';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {AppBar, Toolbar} from '@material-ui/core'
import {Avatar} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';
import MyContext from '../ContextTest/MyContext';
import useStyles from './Styles';



function DefaultLayout({children}) {
  
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const {isLoggedIn, setIsLoggedIn} = useContext(MyContext);

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
          onClick={() => history.push('/user')}
          className={classes.avatar}
           >
             M
           </Avatar>
           </IconButton>
           </>
           : <div>
             <Button className={classes.buttonMargin} variant="contained" onClick={() => history.push('/Login')}>Log in</Button>
             <Button variant="contained" onClick={() => history.push('/Signup')}>Sign up</Button>
             </div>}
        </Toolbar>
      </AppBar>

      {/* side drawer */}

      {isLoggedIn ? <Drawer 
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

        <List className={classes.drawerListItem}>
          {Pages.map((item,indx) => {
            if(indx !== Pages.length - 1){
            return <ListItem button
            className={handleCurrentPage(item)}
            onClick={() => handleLink(item)}
            >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
            } else {
              return <ListItem  
              button
              className={handleCurrentPage(item)}
              onClick={() => handleLink(item)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
            </ListItem>
            }
          })}
        </List>

      </Drawer> : null}

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout