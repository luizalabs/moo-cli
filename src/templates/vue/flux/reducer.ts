export default `import { {{name}}Types } from '{{path}}/{{name}}Action'{{#airbnb}};{{/airbnb}}

export const {{name}}Mutation = {
  [{{name}}Types.ACTION](state, payload) {
    // ...
  }{{#airbnb}},{{/airbnb}}
}{{#airbnb}};{{/airbnb}}

export default {{name}}Mutation{{#airbnb}};{{/airbnb}}
`
