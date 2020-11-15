import React from "react";
import resume from "../../images/resume.PNG";
import "./style.css";

function Resume() {
  return <>
  <h2 className="restitle">Resume</h2>
  <img src={resume} className="resumepic"/>
  </>;
}

export default Resume;
