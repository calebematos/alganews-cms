import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ValueDescriptor  from '../app/components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'default'
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  isCurrency: true,
  color: 'default'
}

export const Primary = Template.bind({})
Primary.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'primary'
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  isCurrency: true,
  color: 'primary'
}