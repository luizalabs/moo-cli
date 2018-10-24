export default `import { {{name}}Types } from '../actions/{{name}}'{{#airbnb}};{{/airbnb}}

const {{name}}State = {}

export default (state = {{name}}State, action) => {
  switch(action.type) {
    case {{name}}Types.ACTION:
      return Object.assign(state, { greeting: 'hello' }){{#airbnb}};{{/airbnb}}
    default:
      return Object.assign(state, { greeting: 'bye' }){{#airbnb}};{{/airbnb}}
  }{{#airbnb}};{{/airbnb}}
}
`;
