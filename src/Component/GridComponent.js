import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    Order: state.orders,
  };
};

const columns = [
  { field: "date", headerName: "Date", width: 150 },
  { field: "name", headerName: "Name", width: 240 },
  { field: "shipTo", headerName: "Ship To", width: 240 },
  { field: "paymentMethod", headerName: "Payment", width: 240 },
  { field: "amount", headerName: "Sale", width: 150 },
];

class GridComponent extends Component {
  render() {
    const rows = this.props.Order;
    return (
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...rows}  />
      </div>
    );
  }
}

export default connect(mapStateToProps)(GridComponent);
