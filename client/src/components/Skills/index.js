import React from "react";
import ProgressBar from "../ProgressBar";
import {Container, Row} from "react-bootstrap";

import "./style.css";

function Skills(props) {

  return (
    <Container className="margin">
      <Row className="noMargin">
        <p className="skill">{props.name}</p>
      </Row>
      <Row className="bar">
        <ProgressBar level={props.level} />
      </Row>
    </Container>
  );
}

export default Skills;
