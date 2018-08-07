"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { shallowMount } from '@vue/test-utils'
import {{name}} from '../{{name}}.vue'

describe('{{name}}.vue', () => {
  it('renders li for each item in props.items', () => {
    const wrapper = shallowMount({{name}})
    expect(wrapper.contains('div')).toBe(true)
  })
})`
    .trim();
