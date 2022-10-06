import { computed, ref, reactive } from "vue"

const globalState = reactive({})

export const useState = (key, initial) => {
  // we assume we have window in storybook
  if (!globalState[key]) {
    globalState[key] = initial()
  }

  const computedState = computed({
    get: () => {
      // force reactivity
      return globalState[key]
    },
    set: (value) => {
      globalState[key] = value
    },
  })

  return computedState
}
