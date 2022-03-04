import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { translate } from "../../util/index";
import { navigateToLoginPage } from "../../routing/navigation";
import { useStyles } from "./homePageStyles";

function HomePage(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 5 }}>
            {translate("header")}
          </Typography>
          <Button color="inherit" onClick={() => navigateToLoginPage(history)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.HomePageImage}>
        <Box>Indian Public School</Box>
      </Box>
      <Container maxWidth="lg" className={classes.ContainerStyle}>
        <Typography variant="h4" className={classes.HomePageTitle}>
          Introduction
        </Typography>
        <Typography>{translate("introductio.paragraph")}</Typography>
      </Container>
    </div>
  );
}

export default HomePage;
