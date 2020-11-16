import React from "react";
import resume from "../../images/resume.PNG";
import "./style.css";
import resumepdf from "../../images/resume.pdf";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

function Resume() {
  return <>
  <h2 className="restitle">Resume</h2>
  <p>
  <a href = {resumepdf} target = "_blank" className="downloadpdf"><PictureAsPdfIcon/> Download PDF</a>
  </p>
  <img src={resume} className="resumepic"/>
  </>;
}

export default Resume;
