export default `import React, { Component } from 'react'{{#airbnb}};{{/airbnb}}
{{#redux}}import { connect } from 'react-redux'{{#airbnb}};{{/airbnb}}{{/redux}}
import PropTypes from 'prop-types'{{#airbnb}};{{/airbnb}}

{{#redux}}function mapStateToProps(state) {
  return {
  };
}{{/redux}}

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

{{^redux}}export default {{name}}{{#airbnb}};{{/airbnb}}{{/redux}}

{{#redux}}export default connect(
  mapStateToProps{{#airbnb}},{{/airbnb}}
)({{name}}){{#airbnb}};{{/airbnb}}{{/redux}}
`.trim()
