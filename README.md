# @vuenice/checkbox

Vue 3 Checkbox component with custom styling and states.

## Installation

```bash
npm install @vuenice/checkbox
```

## Usage

### Composition API (Recommended)

```vue
<template>
  <VueNiceCheckbox v-model="checked" label="I agree to the terms" />
</template>

<script setup>
import { ref } from 'vue'
import VueNiceCheckbox from '@vuenice/checkbox'

const checked = ref(false)
</script>
```

### Optional API

```vue
<template>
  <VueNiceCheckbox v-model="checked" label="I agree to the terms" />
</template>

<script>
import VueNiceCheckbox from '@vuenice/checkbox'

export default {
  components: {
    VueNiceCheckbox
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` / `v-model` | `Boolean` | `false` | Checkbox state (bound with v-model) |
| `label` | `String` | `null` | Label text to display next to checkbox |
| `name` | `String` | `null` | Input name attribute |
| `value` | `String` | `null` | Value when checked (for checkbox groups) |
| `disabled` | `Boolean` | `false` | Disable the checkbox |
| `readonly` | `Boolean` | `false` | Make checkbox readonly |
| `checked` | `Boolean` | `false` | Initial checked state (deprecated, use v-model) |
| `labelClass` | `String` | `null` | Custom CSS classes for label |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Boolean` | Emitted when checkbox state changes |
| `change` | `Boolean` | Emitted on change event |

## Checkbox States

```vue
<!-- Unchecked -->
<VueNiceCheckbox v-model="unchecked" label="Unchecked" />

<!-- Checked -->
<VueNiceCheckbox v-model="checked" label="Checked" />

<!-- Disabled Unchecked -->
<VueNiceCheckbox :model-value="false" label="Disabled Unchecked" disabled />

<!-- Disabled Checked -->
<VueNiceCheckbox :model-value="true" label="Disabled Checked" disabled />
```

## With Custom Label Class

```vue
<VueNiceCheckbox 
  v-model="agreed" 
  label="I agree to the terms and conditions"
  label-class="text-blue-500 font-medium"
/>
```

## Checkbox Group (Multiple Values)

```vue
<template>
  <div>
    <VueNiceCheckbox v-model="fruits" value="apple" label="Apple" />
    <VueNiceCheckbox v-model="fruits" value="banana" label="Banana" />
    <VueNiceCheckbox v-model="fruits" value="orange" label="Orange" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueNiceCheckbox from '@vuenice/checkbox'

const fruits = ref([])
</script>
```

## Examples

### With Form Validation

```vue
<template>
  <form @submit.prevent="submit">
    <VueNiceCheckbox 
      v-model="form.acceptTerms" 
      label="I accept the terms and conditions"
    />
    <button :disabled="!form.acceptTerms">Submit</button>
  </form>
</template>
```

## License

MIT