import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from '../lib/ui.module';
import { HeaderComponent, iconsList, pageLinks } from '../lib/components';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
  argTypes: {
    onTabLinkClick: {
      action: 'click',
    },
  },
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  template: `
  <style>
    .long-text { 
      width: 50px;
    }
  </style>
    <syncron-sdk-components-header
      [imageLogo] = "{src: 'Syncron logo.svg', alt: 'Supplier portal'}"
      [iconsList]="[
        { name: 'help', tooltip: 'User guide' },
        { name: 'notifications', tooltip: 'Notifications' },
        { name: 'equalizer', tooltip: 'Insights tool' },
        { name: 'speed', tooltip: 'Dashboard' },
        { name: 'account_circle', tooltip: 'Profile settings' },
        { name: 'power_settings_new', tooltip: 'Log off' },
      ]"
      [pageLinks]="[
        { label: 'Order prediction', path: '/prediction' },
        { label: 'Delivery monitoring', path: '/monitoring' },
      ]"
      (tabLinkClick)="onTabLinkClick($event)"
    ></syncron-sdk-components-header>

    <div class='long-text'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dolores reiciendis dignissimos, ipsum sunt, obcaecati at
      eveniet repellendus aut sit sint possimus inventore consectetur ex veniam ratione.
      Repellendus labore suscipit consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dolores reiciendis dignissimos, ipsum sunt, obcaecati at
      eveniet repellendus aut sit sint possimus inventore consectetur ex veniam ratione.
      Repellendus labore suscipit consectetur.
    </div>
  `,
});

const pageLinksList: pageLinks[] = [
  { label: 'Order prediction', path: '/prediction' },
  { label: 'Delivery monitoring', path: '/monitoring'},
];

const icons: iconsList[] = [
  { name: 'help', tooltip: 'User guide' },
  { name: 'notifications', tooltip: 'Notifications' },
  { name: 'equalizer', tooltip: 'Insights tool' },
  { name: 'speed', tooltip: 'Dashboard' },
  { name: 'account_circle', tooltip: 'Profile settings' },
  { name: 'power_settings_new', tooltip: 'Log off' },
]

export const Primary = Template.bind({});

Primary.args = {
  imageLogo: { src: 'Syncron logo.svg', alt: 'Supplier portal'},
  iconsList: icons,
  pageLinks: pageLinksList,
};
