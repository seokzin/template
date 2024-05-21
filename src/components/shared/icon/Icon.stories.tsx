import type { Meta, StoryObj } from '@storybook/react'

import { Icon, IconProps } from '@/components'

const meta: Meta<IconProps> = {
  title: 'components/Icon',
}

type Story = StoryObj<IconProps>

export const Primary: Story = {
  render: () => (
    <>
      <Icon name="arrow_down" />
    </>
  ),
}

export default meta
