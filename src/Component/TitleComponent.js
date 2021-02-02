import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";

class TitleComponent extends Component {
  render(props) {
    return (
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.children}
      </Typography>
    );
  }
}

TitleComponent.propTypes = {
  children: PropTypes.node,
};

export default TitleComponent;
