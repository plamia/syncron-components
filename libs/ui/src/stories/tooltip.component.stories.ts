import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from '../lib/ui.module';

import { TooltipComponent } from '../lib/components/tooltip/tooltip.component';

export default {
  title: 'TooltipComponent',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
} as Meta<TooltipComponent>;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
  template: `
    <syncron-sdk-components-tooltip position="right" showDelay=0 hideDelay=2000 message="I'm a button">
      <button>Button</button>
    </syncron-sdk-components-tooltip>
  `,
});

export const Primary = Template.bind({});

Primary.args = {};
