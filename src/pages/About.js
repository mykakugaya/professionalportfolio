import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Skills from "../components/Skills";
import Bio from "../components/Bio";
import Resume from "../components/Resume";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  margin: {
    marginTop: "10%"
  },
  center: {
    justifyContent: "center",
    padding: "0",
    margin: "0"
  }
}));

function About() {
  const classes = useStyles();
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

  return (
    <Grid className={classes.margin}>
      {/* Hero*/}
      <Grid item xs={12}>
        {/* <Hero /> */}
      </Grid>
      {/* Biography*/}
      <Grid item xs={12} id="bio">
        <Bio />
      </Grid>
      {/* Skills*/}
      <Grid item xs={12} className={classes.center} id="skills">
        <Paper className={classes.paper}>
          <Skills skills={skills} />
        </Paper>
      </Grid>
      {/* Resume*/}
      <Grid item xs={12} id="resume">
        <Resume />
      </Grid>
    </Grid>
  );
}

export default About;
