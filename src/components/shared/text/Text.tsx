import styled from '@emotion/styled'

import { ColorKey, TypographyKey } from '@/foundations'

export interface TextProps {
  children: React.ReactNode
  name?: TypographyKey
  color?: ColorKey
}

const Text = ({ children, name = 'body1', color = 'text_primary' }: TextProps) => {
  return (
    <Container name={name} color={color}>
      {children}
    </Container>
  )
}

export default Text

const Container = styled.p<Omit<TextProps, 'children'>>`
  font-size: ${({ name = 'body1', theme }) => theme.typography[name].fontSize}px;
  font-weight: ${({ name = 'body1', theme }) => theme.typography[name].fontWeight};
  line-height: ${({ name = 'body1', theme }) => theme.typography[name].lineHeight}px;
  color: ${({ color = 'text_primary', theme }) => theme.color[color]};
  letter-spacing: -0.6px;
  white-space: pre-wrap;
`
