import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        width: ".15rem"
    },
});

export default function LeftPanel(props) {

    const classes = useStyles();
    return (
        <Divider orientation="vertical" flexItem="true" classes={{root: classes.root}}/>
    )
}
