import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import "./style.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 3
  },
  title: {
    flexShrink: 3,
    float: "left",
    marginLeft: 0
  },
  appbar: {
    backgroundColor: "white",
    alignItems: "center"
  },
  tabs: {
    color: "black",
    textDecoration: "none",
    margin: "0 !important"
  },
  link: {
    textDecoration: "none",
    textDecorationColor: "black",
    margin: "0 !important"
  },
  activeTab: {
    color: "#e1bee7",
    textDecoration: "none",
    margin: "0 !important"
  },
  padding: {
    paddingLeft: 0,
    left: 0
  },
  menuButton: {
    color: "black",
    display: "none"
  },
  menuItem: {
    color: "black",
    textDecoration: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = useState(false);

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(!anchorEl);
  // };

  //   const handleRedirectHome = () => {
  //     window.location.pathname = "";
  //   }

  // const handleRedirectAbout = () => {
  //   window.location.pathname = "/";
  // };

  // const handleRedirectPortfolio = () => {
  //   window.location.pathname = "/portfolio";
  // };

  // const handleRedirectContact = () => {
  //   window.location.pathname = "/contact";
  // };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.padding}>
          <Tabs className={classes.appbar}>
            {/* <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Icon className={classes.menuButton} id="hamburger">
                menu
              </Icon>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectAbout}
              >
                HOME
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectAbout}
              >
                ABOUT
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectPortfolio}
              >
                PORTFOLIO
              </MenuItem>
              <MenuItem
                className={classes.menuItem}
                onClick={handleRedirectContact}
              >
                CONTACT
              </MenuItem>
            </Menu> */}
            {/* <Link className={classes.link, "navtab"} to="/">
                <Tab className={window.location.pathname === "/" ? classes.activeTab : classes.tabs} label="Home"/>
            </Link> */}
            <Link className={(classes.link, "navtab")} to="/">
              <Tab
                className={
                  window.location.pathname === "/"
                    ? classes.activeTab
                    : classes.tabs
                }
                label="About"
              />
            </Link>
            <Link className={(classes.link, "navtab")} to="/portfolio">
              <Tab
                className={
                  window.location.pathname === "/portfolio"
                    ? classes.activeTab
                    : classes.tabs
                }
                label="Portfolio"
              />
            </Link>
            <Link className={(classes.link, "navtab")} to="/contact">
              <Tab
                className={
                  window.location.pathname === "/contact"
                    ? classes.activeTab
                    : classes.tabs
                }
                label="Contact"
              />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
