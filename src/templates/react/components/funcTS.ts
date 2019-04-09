export default `import * as React from 'react'{{#airbnb}};{{/airbnb}}

interface I{{name}} {}

const {{name}} = (props: I{{name}}) => (
  <div
    className={{{name}}}>
    I{{name}} was created
  </div>
){{#airbnb}};{{/airbnb}}

export default {{name}}{{#airbnb}};{{/airbnb}}
`;
