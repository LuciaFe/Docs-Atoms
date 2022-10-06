import Hello from "./Hello.vue"
import { HelloProps } from "./Hello.props"

export default {
  title: "Atoms/Hello",
  component: Hello,
  argTypes: {},
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Hello },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Hello v-bind="args" />',
})

export const Primary = Template.bind({}) as StorybookTemplateType<HelloProps>
Primary.args = {
  text: "Welcome on board!",
}
