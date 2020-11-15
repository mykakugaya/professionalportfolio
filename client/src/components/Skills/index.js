import React from "react";
import ProgressBar from "../ProgressBar";
import {Container, Row} from "react-bootstrap";

import "./style.css";

function Skills(props) {

  return (
    <Container className="margin">
      <Row>
        <h2 className="title">
          Skills <span className="and">&</span> Technologies
        </h2>
        {props.skills.map(skill => {
          return (
            <>
              <Row className="noMargin">
                <p className="skill">{skill.name}</p>
              </Row>
              <Row className="bar">
                <ProgressBar level={skill.level} />
              </Row>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default Skills;
