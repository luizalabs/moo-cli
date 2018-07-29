"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import React, { Component } from 'react'{{#airbnb}};{{/airbnb}}
{{#flux}}import { connect } from 'react-redux'{{#airbnb}};{{/airbnb}}{{/flux}}
import PropTypes from 'prop-types'{{#airbnb}};{{/airbnb}}

{{#flux}}function mapStateToProps(state) {
  return {
  };
}{{/flux}}

class {{name}} extends Component {
  render () {
    return (
      <div
        className="{{name}}">
      </div>
    ){{#airbnb}};{{/airbnb}}
  }
}{{#airbnb}};{{/airbnb}}

{{name}}.defaultProps = {
}{{#airbnb}};{{/airbnb}}

{{name}}.propTypes = {
}{{#airbnb}};{{/airbnb}}

{{^flux}}export default {{name}}{{#airbnb}};{{/airbnb}}{{/flux}}

{{#flux}}export default connect(
  mapStateToProps{{#airbnb}},{{/airbnb}}
)({{name}}){{#airbnb}};{{/airbnb}}{{/flux}}
`.trim();
