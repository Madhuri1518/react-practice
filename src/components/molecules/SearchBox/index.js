import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme)=>({
    sm_root: {
      display: 'flex',
      alignItems: 'center',
      width: 200
    },
    lg_root: {
      display: 'flex',
      alignItems: 'center',
      width: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    }
}));

export default function LeftPanel(props) {

    const classes = useStyles();
    return (
        <Paper component="form" className={props.size==='sm'?classes.sm_root:classes.lg_root}>
      <InputBase
        className={classes.input}
        placeholder={props.label}
        inputProps={{ 'height': '1.9rem' }}
      />
    </Paper>
  );
}
