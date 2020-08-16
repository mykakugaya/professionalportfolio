import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    color: "gray",
    textDecoration: "none"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  activeTab: {
    color: "#757de8",
    textDecoration: "none"
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
    color: "black"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.padding}>
          <Tabs className={classes.appbar}>
            {/* <Link className={classes.link} to="/">
                <Tab className={window.location.pathname === "/" ? classes.activeTab : classes.tabs} label="Home"/>
            </Link> */}
            <Link className={classes.link} to="/">
              <Tab
                className={
                  window.location.pathname === "/"
                    ? classes.activeTab
                    : classes.tabs
                }
                label="About"
              />
            </Link>
            <Link className={classes.link} to="/portfolio">
              <Tab
                className={
                  window.location.pathname === "/portfolio"
                    ? classes.activeTab
                    : classes.tabs
                }
                label="Portfolio"
              />
            </Link>
            <Link className={classes.link} to="/contact">
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
