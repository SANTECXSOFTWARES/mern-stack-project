import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'
import { translate } from '../../util/index';
import { navigateToLoginPage } from '../../routing/navigation';

function HomePage(props) {
  const {history} = props;

    return (
      <>
        <AppBar color="warning">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
            {translate("header")}
          </Typography>
          <Button color="inherit" onClick={()=> navigateToLoginPage(history)}>Login</Button>
        </Toolbar> 
        </AppBar>
        <Typography>
          {translate("introductio.paragraph")}
        </Typography>
        </>
    )
}

export default HomePage;