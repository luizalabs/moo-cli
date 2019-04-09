export default `import { shallowMount } from '@vue/test-utils'
import {{name}} from './index.vue'

describe('{{name}}.vue', () => {
  const wrapper = shallowMount({{name}})

  it('should render properly', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes().includes('{{name}}')).toBe(true)
    expect(wrapper.text()).toBe('{{name}} component by moo-cli')
  })
})
`;
