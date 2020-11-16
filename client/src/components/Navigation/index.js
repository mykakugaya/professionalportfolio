import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Navigation () {
  return (
    <div>
<Navbar expand="lg" id="navi">
  <Navbar.Toggle className="navbar-light" aria-controls="basic-navbar-nav" id="toggle-icon" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link className="inactive" activeClassName="active" exact={true} to="/">ABOUT
    </Link>
    <Link className="inactive" activeClassName="active" exact={true} to="/portfolio">PORTFOLIO
    </Link>
    <Link className="inactive" activeClassName="active" exact={true}  to="/contact">CONTACT
    </Link>
    </Nav>
    <div className="right">
      <a className="githubicon" target="_blank" href="https://github.com/mykakugaya">
        <GitHubIcon className="largericon"/>
      </a>
      <a className="linkedinicon" target="_blank" href="https://www.linkedin.com/in/mykakugaya/">
        <LinkedInIcon className="largericon"/>
      </a>
    </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
