export default `export enum {{name}}Types = {
	ACTION = 'ACTION'{{#airbnb}},{{/airbnb}}
}{{#airbnb}};{{/airbnb}}

export const {{name}}Action = ({ commit }, payload) => {
  return commit({{name}}Types.ACTION, payload){{#airbnb}};{{/airbnb}}
}{{#airbnb}};{{/airbnb}}
`;
