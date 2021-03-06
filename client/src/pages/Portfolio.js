import React from "react";
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import "./portfoliostyle.css";
import Spacehub from "../images/spacehub.jpg";
import Jothefish from "../images/jothefish.png";
import Monopoly from "../images/monopoly.jpg";
import PortfolioPreview from "../components/PortfolioPreview";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Portfolio() {
    return (
        <Container className="portfoliobackground">
            <div className="portfolio">
              <h1>Past&Ongoing Projects</h1>
            </div>
            <Row>
                <Col className="addpadding" xs={12} sm={12} md={6} lg={6}>
                    <img src={Jothefish} className="portimage imgborder"></img>
                    <Row>
                        <Col xs={12} sm={6}>
                        <h2 className="porttitle">Jo The Fish</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                        <PortfolioPreview className="preview" index='0'/>
                        </Col>
                    </Row>
                    <p className="portdesc">
                    Starter-up in development stages. A Google Chrome extension and community platform that informes users
                    about the ethical standpoint of the company websites they visit so that they can make decisions as educated consumers.
                    </p>
                    <p>
                        <GitHubIcon/><a href="https://github.com/sharlenemay/test-site" target="_blank"> Github repository</a>
                            <br></br>
                        <OpenInNewIcon/><a href="https://jothefish.com/" target="_blank"> Deployed application</a>
                    </p>
                </Col>
                <Col className="addpadding" xs={12} sm={12} md={6} lg={6}>
                    <img src={Spacehub} className="portimage"></img>
                    <Row>
                        <Col xs={12} sm={6}>
                        <h2 className="porttitle">The Spacehub</h2>
                        </Col>
                        <Col  xs={12} sm={6}>
                        <PortfolioPreview className="preview" index='1'/>
                        </Col>
                    </Row>
                    <p className="portdesc">
                    A space enthusiast’s personal dashboard for all astrology-related information and news.
                    Main features include a space widgets dashboard, interactive forum for logged in users, and a customizable image gallery.
                    </p>
                    <p>
                        <GitHubIcon/><a href="https://github.com/mykakugaya/project-space" target="_blank"> Github repository</a>
                            <br></br>
                        <OpenInNewIcon/><a href="https://the-space-hub.herokuapp.com/" target="_blank"> Deployed application</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="addpadding extrapaddingbottom" xs={12} sm={12} md={6} lg={6}>
                    <img src={Monopoly} className="portimage"></img>
                    <Row>
                        <Col xs={12} sm={6}>
                        <h2 className="porttitle">Thieves Monopoly</h2>
                        </Col>
                        <Col  xs={12} sm={6}>
                        <PortfolioPreview className="preview" index='2'/>
                        </Col>
                    </Row>
                    <p className="portdesc">
                    Virtual turn-based board game for two users at a time that adopts game mechanics from classic games like Monopoly and Tag.
                    </p>
                    <p>
                        <GitHubIcon/><a href="https://github.com/abazrafshan/Project2Game" target="_blank"> Github repository</a>
                            <br></br>
                        <OpenInNewIcon/><a href="https://morning-earth-32122.herokuapp.com/" target="_blank">Deployed application</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;