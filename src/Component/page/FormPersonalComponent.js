import {
  AppBar,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import React, { Component } from "react";
import { homeStyle } from "../style";

const FormPersonalComponent = (props) =>{
    const { classes } = props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <div>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

export default withStyles(homeStyle)(FormPersonalComponent);
