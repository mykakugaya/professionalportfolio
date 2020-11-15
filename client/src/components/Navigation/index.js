import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Github from "../../images/github-logo.png";
import LinkedIn from "../../images/linkedin-logo.png";

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
      <a target="_blank" href="https://github.com/mykakugaya">
        <img src={Github} className="github"/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/mykakugaya/">
        <img src={LinkedIn} className="linkedin"/>
      </a>
    </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
