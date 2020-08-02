import React from "react";
import ProgressBar from "../ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
    color: "#bbdefb"
  },
  and: {
    color: "#bdbdbd",
    fontSize: "30px"
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
                <h6 className={classes.noMargin}>{skill.name}</h6>
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
