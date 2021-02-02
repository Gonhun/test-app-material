import {
  TextField,
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
  Divider,
  InputAdornment,
  Icon,
} from "@material-ui/core";
import { Autocomplete, useAutocomplete } from "@material-ui/lab";
import SearchRounded from "@material-ui/icons/SearchRounded";
import React, { Component } from "react";
import { connect } from "react-redux";
import { autoCompStyle } from "./style";

const mapStateToProps = (state) => {
  return {
    AutoComp: state.autocomp,
  };
};

class AutoCompleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (event, values) => {
    this.setState(
      {
        tags: values,
      },
      () => {
        // This will output an array of objects
        // given by Autocompelte options property.
        console.log(this.state.tags);
      }
    );
  };

  render() {
    const classes = this.props;
    const top100 = this.props.AutoComp;

    return (
      <div style={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top100}
          getOptionLabel={(option) => option.title}
          onChange={this.onTagsChange}
          style={{ opacity: 0.8 }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search...."
              margin="dense"
              variant="standard"
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchRounded />
              //     </InputAdornment>
              //   ),
              // }}
              style={{ backgroundColor: "inherit", borderColor: "white" }}
            />
          )}
          renderOption={(options) => {
            return (
              <Table size="small">
                <TableBody>
                  <TableRow {...options}>
                    <TableCell
                      style={{ borderRight: "0.5px solid black", width: "70%", borderBottom: "none" }}
                    >
                      {options.title}
                    </TableCell>
                    <TableCell
                       style={{  borderBottom: "none", width: "30%" }}
                    >
                      {options.year}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              // <Grid container alignItems="center">
              //   <Typography
              //     style={{ letterSpacing: "0.5px", marginRight: "10px" }}
              //   >
              //     {options.year}
              //   </Typography>
              //   <Divider orientation="vertical" flexItem />
              //   <Typography
              //     style={{
              //       letterSpacing: "0.5px",
              //       width: "70%",
              //       marginLeft: "10px",
              //     }}
              //   >
              //     {options.title}
              //   </Typography>
              // </Grid>
            );
          }}
        />
      </div>
    );
  }
}

export default withStyles(autoCompStyle)(
  connect(mapStateToProps)(AutoCompleteComponent)
);
