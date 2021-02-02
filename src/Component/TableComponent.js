import { Typography, withStyles } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tableStyle } from "./style";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    Order: state.orders,
  };
};

const preventDefault = (event) => {
  event.preventDefault();
};

class TableComponent extends Component {
  render() {
    const classes = this.props.classes;
    const row = this.props.Order;
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Orders
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.shipTo}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell align="right">{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" to="" onClick={preventDefault}>
            See more orders
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(tableStyle)(connect(mapStateToProps)(TableComponent));
