export default `import { {{name}}Types, I{{name}}Action } from '{{path}}/{{name}}Types'{{#airbnb}};{{/airbnb}}

interface I{{name}}State {}{{#airbnb}};{{/airbnb}}

const {{name}}State: I{{name}}State = {}{{#airbnb}};{{/airbnb}}

export default (state = {{name}}State, action: I{{name}}Action) => {
  switch(action.type) {
    case {{name}}Types.ACTION:
      return Object.assign(state, { greeting: 'hello' }){{#airbnb}};{{/airbnb}}
    default:
      return Object.assign(state, { greeting: 'bye' }){{#airbnb}};{{/airbnb}}
  }{{#airbnb}};{{/airbnb}}
}{{#airbnb}};{{/airbnb}}
`
