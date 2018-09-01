export default `import React, { Component } from 'react'{{#airbnb}};{{/airbnb}}
{{#flux}}
import { connect } from 'react-redux'{{#airbnb}};{{/airbnb}}
{{/flux}}
{{^clean}}
import PropTypes from 'prop-types'{{#airbnb}};{{/airbnb}}
{{/clean}}

{{#flux}}
function mapStateToProps(state) {
  return {
  }{{#airbnb}};{{/airbnb}}
}

{{/flux}}
class {{name}} extends Component {
  {{^clean}}
  static defaultProps = {}{{#airbnb}};{{/airbnb}}

  {{/clean}}
  {{^clean}}
  static propTypes = {}{{#airbnb}};{{/airbnb}}
  {{/clean}}

  render () {
    return (
      <div
        className="{{name}}">
        {{name}} was created!
      </div>
    ){{#airbnb}};{{/airbnb}}
  }
}{{#airbnb}};{{/airbnb}}

{{^flux}}export default {{name}}{{#airbnb}};{{/airbnb}}{{/flux}}

{{#flux}}export default connect(
  mapStateToProps{{#airbnb}},{{/airbnb}}
)({{name}}){{#airbnb}};{{/airbnb}}{{/flux}}
`;
