import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { InfoCardComponent } from './info-card.component';

export default {
  title: 'Info Card',
  component: InfoCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<InfoCardComponent>;

const Template: Story<InfoCardComponent> = (args: InfoCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
