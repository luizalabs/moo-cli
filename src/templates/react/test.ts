export default `import React from 'react'{{#airbnb}};{{/airbnb}}
import { shallow } from 'enzyme'{{#airbnb}};{{/airbnb}}
import {{name}} from '../{{name}}'{{#airbnb}};{{/airbnb}}
test('should render the {{name}} component', async () => {
  const wrapper = shallow(
    <{{name}} />
  ){{#airbnb}};{{/airbnb}}
  expect(wrapper.first().hasClass('{{name}}')).toMatchSnapshot(){{#airbnb}};{{/airbnb}}
  expect(wrapper).toMatchSnapshot(){{#airbnb}};{{/airbnb}}
}){{#airbnb}};{{/airbnb}}
`.trim();
