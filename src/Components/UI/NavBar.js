import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.heading} position="static">
      <h3>User Details Form</h3>
    </AppBar>
  );
}