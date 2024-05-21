import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/components'
import { color } from '@/foundations'

const meta: Meta = {
  title: 'foundations/Color',
}

export const Examples: StoryObj = {
  render: () => (
    <>
      <Text name="h100">Light Theme</Text>

      <Flex>
        {Object.entries(color.light).map(([key, value]) => (
          <Container key={key}>
            <ColorBox value={value} />
            <ColorValue>
              <Text name="caption2_strong">{key}</Text>
              <Text name="caption2">{value}</Text>
            </ColorValue>
          </Container>
        ))}
      </Flex>

      <Text name="h100">Dark Theme</Text>

      <Flex>
        {Object.entries(color.light).map(([key, value]) => (
          <Container key={key}>
            <ColorBox value={value} />
            <Text name="caption2_strong">{key}</Text>
            <Text name="caption2">{value}</Text>
          </Container>
        ))}
      </Flex>
    </>
  ),
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ColorBox = styled.div<{ value: string }>`
  min-width: 150px;
  height: 150px;
  margin: 10px;
  background-color: ${({ value }) => value};
  border-radius: 8px;
`

const ColorValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`

export default meta
