export default `import React from 'react'{{#airbnb}};{{/airbnb}}

const {{name}} = () => (
  <div className="{{{name}}}">
    {{name}} was created
  </div>
){{#airbnb}};{{/airbnb}}

export default {{name}}{{#airbnb}};{{/airbnb}}
`;
