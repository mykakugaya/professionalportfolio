import React from "react";
import ProgressBar from "../components/ProgressBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function About() {
    const classes = useStyles();

    return (
        <Grid>
            {/* Biography, CS language progress, resume */}
            <Grid item xs={12} sm={6}>
                <Paper>
                    <h1>hello</h1>
                    <ProgressBar />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default About;