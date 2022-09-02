import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpinnerComponent } from '../lib/components/spinner/spinner.component';

export default {
  title: 'SpinnerComponent',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['indeterminate', 'determinate'],
      },
    },
  },
} as Meta<SpinnerComponent>;

const Template: Story<SpinnerComponent> = (args: SpinnerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  loading: true,
  overlay: false,
  diameter: 50,
  strokeWidth: 5,
  color: 'pink',
  message: 'Loading data, please wait!',
  value: 300,
  mode: 'indeterminate',
};
