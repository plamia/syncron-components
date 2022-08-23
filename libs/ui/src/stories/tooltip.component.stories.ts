import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";

import { TooltipComponent } from "../lib/components/tooltip/tooltip.component";

export default {
  title: "TooltipComponent",
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule, MatTooltipModule],
    }),
  ],
} as Meta<TooltipComponent>;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
