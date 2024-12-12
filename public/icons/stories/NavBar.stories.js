import Navbar from '../../../src/layouts/NavBar.vue';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    toolbarTitle: {
      control: 'text',
      description: 'Title displayed in the navbar',
      defaultValue: 'Vision2Virtual',
    },
  },
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: '<Navbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  toolbarTitle: 'Vision2Virtual',
};

// You can add more story variations here if needed
// For example:
// export const AlternativeTitle = Template.bind({});
// AlternativeTitle.args = {
//   toolbarTitle: 'Another Title',
// };
