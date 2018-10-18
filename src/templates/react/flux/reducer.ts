export default `import { {{name}}Types } from '{{path}}/{{name}}Actions'{{#airbnb}};{{/airbnb}}

const {{name}}State = {}

export default (state = {{name}}State, action) => {
  switch(action.type) {
    case {{name}}Types.ACTION:
      return Object.assign(state, { greeting: 'hello' }){{#airbnb}};{{/airbnb}}
    default:
      return Object.assign(state, { greeting: 'bye' }){{#airbnb}};{{/airbnb}}
  }{{#airbnb}};{{/airbnb}}
}
`
