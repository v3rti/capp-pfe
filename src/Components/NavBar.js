import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'

function NavBar(){

  return(
    <div>
      <nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
      </AppBar>
      </nav>
    </div>
  )
}

export default NavBar;