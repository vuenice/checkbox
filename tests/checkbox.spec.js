import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VueNiceCheckbox from '../src/VueNiceCheckbox.vue'

describe('VueNiceCheckbox', () => {
  it('renderscheckbox exists', () => {
    const wrapper = mount(VueNiceCheckbox)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with default props', () => {
    const wrapper = mount(VueNiceCheckbox)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders label when provided', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { label: 'Test Label' }
    })
    expect(wrapper.text()).toContain('Test Label')
  })

  it('is unchecked by default', () => {
    const wrapper = mount(VueNiceCheckbox)
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false)
  })

  it('is checked when modelValue is true', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { modelValue: true }
    })
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true)
  })

  it('emits update:modelValue when changed', async () => {
    const wrapper = mount(VueNiceCheckbox)
    await wrapper.find('input[type="checkbox"]').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { disabled: true }
    })
    expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBeDefined()
  })

  it('has correct name attribute', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { name: 'test-checkbox' }
    })
    expect(wrapper.find('input[type="checkbox"]').attributes('name')).toBe('test-checkbox')
  })

  it('applies custom label class', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { 
        label: 'Test',
        labelClass: 'custom-class'
      }
    })
    const label = wrapper.find('label')
    expect(label.classes()).toContain('custom-class')
  })

  it('is readonly when readonly prop is true', () => {
    const wrapper = mount(VueNiceCheckbox, {
      props: { readonly: true }
    })
    expect(wrapper.find('input[type="checkbox"]').attributes('readonly')).toBeDefined()
  })
})