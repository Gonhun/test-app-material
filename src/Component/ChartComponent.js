import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { chartStyle } from "./style";
import { Typography } from "@material-ui/core";

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("00:00", 0),
  createData("02:00", 200),
  createData("04:00", 400),
  createData("06:00", 600),
  createData("08:00", 800),
  createData("10:00", 1000),
  createData("12:00", 1200),
  createData("14:00", 1400),
  createData("18:00", 1800),
  createData("20:00", 2000),
  createData("22:00", undefined),
];

class ChartComponent extends Component {
  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Graphic
        </Typography>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="time" stroke={classes.backColor} />
            <YAxis stroke={classes.backColor}>
              <Label angle={270} position="left" style={classes.fillYAxis}>
                Sales ($)
              </Label>
            </YAxis>
            <Line
              type="monotone"
              dataKey="amount"
              stroke={classes.lineColor}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default withStyles(chartStyle)(ChartComponent);
