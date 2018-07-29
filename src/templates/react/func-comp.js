export default `import React, { Component } from 'react'{{#airbnb}};{{/airbnb}}
import PropTypes from 'prop-types'{{#airbnb}};{{/airbnb}}

const {{name}} = () => (
  <div
    className={{{name}}}>
  </div>
){{#airbnb}};{{/airbnb}}

{{name}}.defaultProps = {
}{{#airbnb}};{{/airbnb}}

{{name}}.propTypes = {
}{{#airbnb}};{{/airbnb}}

export default {{name}}{{#airbnb}};{{/airbnb}}
`.trim()
