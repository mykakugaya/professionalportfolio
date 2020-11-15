import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../images/myka.JPG";

function Bio() {
  return (
    <Container>
        <Row>
        <h2 className="about">About Me</h2>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
          <img src={ProfilePic} className="image"/>
          </Col>
          <Col  className="biolinks" xs={12} sm={12} md={6} lg={6}>
            <p>Email: <a href="#">mykakug129@gmail.com</a>
              <br></br>
              School email: <a href="#">mkugaya@bu.edu</a>
              <br></br>
              Github: <a href="https://github.com/mykakugaya" target="_blank">mykakugaya</a>
              <br></br>
              LinkedIn: <a href="https://www.linkedin.com/in/mykakugaya/" target="_blank">mykakugaya</a>
            </p>
          </Col>
        </Row>
        <Row>
        <p className="bio">
          Hello! My name is Myka and I am a full-stack web developer with a biochemistry and
          psychology background, currently pursuing my BA degree in computer
          science at Boston University (graudating May 2022). I have received a
          certificate in full stack web development from the UCLA Extension
          Coding Bootcamp in July 2020. My technical skills include HTML, CSS,
          Javascript/jQuery, React, Node, Python, and responsive web design (see below for a detailed current skill set).
          <br />
          <br />
          Computers have fascinated me from a young age, and being able to
          explore and improve the virtual world has been and will continue to be
          extremely rewarding to me. I am passionate in designing innovative and
          intuitive features that bring impactful user experiences. More
          importantly, I am always eager to improve and expand my technical
          skill set, because I love to completely immerse myself in the process
          of learning something new. Having worked in a psychology-CS research lab through college, I have
          confidence in my ability to juggle priorities and multitask
          successfully while leading a team. In collaborative projects, I was
          known as an ambitious yet responsible, highly dedicated member.
          Speaking of team efforts, I also provided extensive value to my team
          projects during the UCLA Extension boot camp by consistently
          communicating with members over Slack and researching new technologies
          to implement in my own time.
          <br />
          <br />
          Currently, I am involved as a full-stack developer on <a target="_blank" href="https://jothefish.com">JoTheFish</a>, a starter-up that
          raises awareness of the ethical standpoints of companies and websites. As online platforms
          become increasingly popular, a large portion of the consumers are supporting and utilizing
          these websites without proper knowledge of the company's ethic for decisionmaking. Many companies
          have taken measures influenced by negative discriminatory attitudes that their consumers may not agree with. The JoTheFish Google Chrome
          extension is connected to a community platform that gathers data from users about various websites, including
          any past actions or views that may affect the policies and future decisions of that company. Our goal is to
          provide users with valuable data on these sites so that they can make well-informed decisions
          and interact with companies that they can trust.
        </p>
      </Row>
    </Container>
  );
}

export default Bio;
