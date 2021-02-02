import { Grid, Paper, withStyles } from "@material-ui/core";
import GridComponent from "../GridComponent";
import clsx from "clsx";
import React, { Component } from "react";
import ChartComponent from "../ChartComponent";
import { homeStyle } from "../style";

const DashboardPage = (props) => {
  const { classes } = props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <ChartComponent />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GridComponent />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(homeStyle)(DashboardPage);
