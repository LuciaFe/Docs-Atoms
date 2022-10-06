import Share from "./Share.vue"
import { ShareProps } from "./Share.props"

export default {
  title: "Molecules/Share",
  component: Share,
  argTypes: {},
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Share },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Share v-bind="args" />',
})

export const Primary = Template.bind({}) as StorybookTemplateType<ShareProps>
Primary.args = {
  url: "https://www.google.it",
  title: "Lorem ipsum",
}
