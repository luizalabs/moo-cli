export default `import {{#typescript}}* as {{/typescript}}React from 'react'{{#airbnb}};{{/airbnb}}

{{#typescript}}interface I{{name}} {}{{/typescript}}

const {{name}} = ({{#typescript}}props: I{{name}}{{/typescript}}) => (
  <div
    className={{{name}}}>
    I{{name}} was created
  </div>
){{#airbnb}};{{/airbnb}}

export default {{name}}{{#airbnb}};{{/airbnb}}
`;
