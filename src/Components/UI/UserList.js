import React from 'react';
import {Card,CardContent,Typography,makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserList({data}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {data.FirstName}  {data.LastName}  {data.Gender}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Date Of Birth: {data.DateOfBirth}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {data.FoodOption}
        </Typography>
        <Typography variant="body2" component="p">
          {data.TelNumber} 
          <br />
          {data.Email}
        </Typography>
      </CardContent>
    </Card>
  );
}
