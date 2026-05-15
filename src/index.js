import { ref } from 'vue'

export { default as VueNiceCheckbox } from './VueNiceCheckbox.vue'

export function createCheckbox(options = {}) {
  return ref(options.checked || false)
}