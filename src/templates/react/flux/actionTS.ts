export default `export enum {{name}}Types = {
	ACTION = 'ACTION'{{#airbnb}},{{/airbnb}}
}{{#airbnb}};{{/airbnb}}

export interface I{{name}}Action {
	type: {{name}}Action{{#airbnb}};{{/airbnb}}
}{{#airbnb}};{{/airbnb}}

export const {{name}}Action = () => ({
  type: {{name}}Types.ACTION
}){{#airbnb}};{{/airbnb}}
`
