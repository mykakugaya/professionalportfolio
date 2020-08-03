import React from "react";
import ProgressBar from "../ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  margin: {
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "7%"
  },
  noMargin: {
    margin: 0,
    padding: 0
  },
  title: {
    color: "#bbdefb",
    fontSize: "2.5rem"
  },
  and: {
    color: "#bdbdbd",
    fontSize: "3rem"
  },
  name: {
    margin: 0,
    padding: 0,
    fontSize: "0.8rem"
  }
}));

function Skills(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.margin}>
      <Grid item xs={12}>
        <h2 className={classes.title}>
          Skills <span className={classes.and}>&</span> Technologies
        </h2>
        {props.skills.map(skill => {
          return (
            <>
              <Grid item xs={2} className={classes.noMargin}>
                <h6 className={classes.name}>{skill.name}</h6>
              </Grid>
              <Grid item xs={12}>
                <ProgressBar level={skill.level} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Skills;
