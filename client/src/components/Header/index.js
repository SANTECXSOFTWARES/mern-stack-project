import React from 'react'
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { translate } from '../../util/translator';
const Header = () =>{
  return <AppBar>
  <Toolbar>
    <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
      {translate("header")}
    </Typography>
  </Toolbar>
</AppBar>
}

export default Header