import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    justifyContent: "center",
    margin: "0 auto"
  },
  noMargin: {
    margin: 0,
    padding: 0
  },
  title: {
    color: "#bbdefb",
    fontSize: "3.5rem",
    textAlign: "left",
    marginLeft: "5%",
    marginBottom: 0
  },
  bio: {
    fontSize: "0.8rem",
    marginRight: "15px",
    marginLeft: "15px"
  },
  name: {
    fontSize: "4rem",
    color: "#bdbdbd",
    margin: 0
  }
}));

function Bio() {
  const classes = useStyles();

  return (
    <Grid container className={classes.margin}>
      <Grid item xs={12}>
        <h2 className={classes.title}>About Me</h2>
        <h1 id="name" className={classes.name}>
          myka kugaya
        </h1>
        <p className={classes.bio}>
          Hello! I am a full-stack web developer with a biochemistry and
          psychology background, currently pursuing my BA degree in computer
          science at Boston University (class of 2022). I have received a
          certificate in full stack web development from the UCLA Extension
          Coding Bootcamp in July 2020. My technical skills include HTML, CSS,
          Javascript/jQuery, React, Node, and responsive web design (see{" "}
          <Link smooth to="//#skills">
            below
          </Link>{" "}
          for a detailed current skill set).
          <br />
          <br />
          Computers have fascinated me from a young age, and being able to
          explore and improve the virtual world has been and will continue to be
          extremely rewarding to me. I am passionate in designing innovative and
          intuitive features that bring impactful user experiences. More
          importantly, I am always eager to improve and expand my technical
          skill set, because I love to completely immerse myself in the process
          of learning something new.
          <br />
          <br />
          Having worked in a psychology-CS research lab through college, I have
          confidence in my ability to juggle priorities and multitask
          successfully while leading a team. In collaborative projects, I was
          known as an ambitious yet responsible, highly dedicated member.
          Speaking of team efforts, I also provided extensive value to my team
          projects during the UCLA Extension boot camp by consistently
          communicating with members over Slack and researching new technologies
          to implement in my own time.
          <br />
          <br />
          My STEM background has greatly influenced my interests even in the
          programming world, and in the future I would like to integrate higher
          quality user interfaces into the health field to benefit the public’s
          welfare and provide more efficiency within the system. As of now, I
          simply hope to immerse myself in collaborative projects that will
          inspire me and expand my skill set as a developer. I believe that in
          any field of interest, the motivation and will to learn are the
          crucial keys to breaking boundaries and evolving as a team. Along with
          these traits, it is my technical expertise, strong work ethic, and
          leadership that would make me an advantageous candidate for any team.
        </p>
      </Grid>
    </Grid>
  );
}

export default Bio;
