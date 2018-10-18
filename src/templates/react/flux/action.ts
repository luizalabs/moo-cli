export default `export const {{name}}Types = {
	ACTION: 'ACTION'{{#airbnb}},{{/airbnb}}
}{{#airbnb}};{{/airbnb}}

export const {{name}}Action = () => ({
  type: {{name}}Types.ACTION{{#airbnb}},{{/airbnb}}
}){{#airbnb}};{{/airbnb}}
`
