import {
  AppBar,
  Badge,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { homeStyle } from "../Component/style";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";
import NavBarComponet from "../Component/NavbarComponent";
import { connect } from "react-redux";
import AutoCompleteComponent from "../Component/AutoCompleteComponent";
import { BrowserRouter, Route } from "react-router-dom";
import DashboardPage from "../Component/page/DashboardPage";
import FormPersonalComponent from "../Component/page/FormPersonalComponent";

const mapStateToProps = (state) => {
  return {
    Navbar: state.navbars,
  };
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Open: true,
    };
  }

  render() {
    const ToggleDrawableOpen = () => {
      this.setState({ Open: true });
    };

    const ToggleDrawableClose = () => {
      this.setState({ Open: false });
    };

    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(
            classes.appBar,
            this.state.Open && classes.appBarShift
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open-drawer"
              className={clsx(
                classes.menuButton,
                this.state.Open && classes.menuButtonHide
              )}
              onClick={ToggleDrawableOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <AutoCompleteComponent />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color='inherit'>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !this.state.Open && classes.drawerPaperClose
            ),
          }}
          open={this.state.Open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={ToggleDrawableClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <NavBarComponet items={this.props.Navbar} />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <BrowserRouter>
              <Route path='/' exact component={DashboardPage} />
              <Route path='/personal' component={FormPersonalComponent}/>
            </BrowserRouter>
            <Box pt={4}></Box>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(homeStyle)(connect(mapStateToProps)(HomeContainer));
