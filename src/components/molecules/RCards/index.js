import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "inherit",
  },
});

export default function RCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="subtitle2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
