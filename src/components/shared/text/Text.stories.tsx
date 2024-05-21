import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@/components'

const meta = {
  title: 'components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<TextProps>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
  },
  render: ({ children }) => <Text>{children} render test</Text>,
}

export default meta
