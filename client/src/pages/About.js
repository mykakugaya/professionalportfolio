import React from "react";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Resume from "../components/Resume";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";
import "./aboutstyle.css";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';
import whitedownarrow from "../images/whitedownarrow.svg";
import bluedownarrow from "../images/bluedownarrow.svg";

function About() {
  const skills = [
    { name: "HTML5/CSS", level: 2 },
    { name: "Javascript/jQuery", level: 2 },
    { name: "Java", level: 2 },
    { name: "React", level: 2 },
    { name: "Python", level: 1 },
    { name: "C++", level: 0 },
    { name: "Node/Express", level: 2 },
    { name: "MySQL", level: 2 },
    { name: "MongoDB", level: 1 },
    { name: "Postman", level: 2 }
  ];
  const aboutSection = useScrollSection('about');
  const skillsSection = useScrollSection('skills');
  const resumeSection = useScrollSection('resume');

  return (
    <Container className="main">
      <ScrollingProvider>
        <Jumbotron className="background">
            <h1 className="name">MYKA KUGAYA</h1>
            <h4 className="caption">— FULL-STACK WEB DEVELOPER —</h4>
            <img className="arrow1" src={whitedownarrow} onClick={aboutSection.onClick} selected={aboutSection.selected}></img>
        </Jumbotron>

        <Section id="about">
          <Bio />
        </Section>
        <img className="arrow2" src={bluedownarrow} onClick={skillsSection.onClick} selected={skillsSection.selected}></img>

        <Section id="skills">
            <Skills skills={skills}/>
        </Section>
        <img className="arrow3" src={bluedownarrow} onClick={resumeSection.onClick} selected={resumeSection.selected}></img>
        
        <Section id="resume">
          <Resume />
        </Section>
      </ScrollingProvider>
    </Container>

  );
}

export default About;
