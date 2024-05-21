import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/components'

const meta = {
  title: 'foundation/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <>
      <Text name="h1">h1</Text>
      <Text name="h2">h2</Text>
      <Text name="h3">h3</Text>
      <Text name="h4">h4</Text>
      <Text name="h5">h5</Text>
      <Text name="body1">body1</Text>
      <Text name="body2">body2</Text>
    </>
  ),
}

export default meta
