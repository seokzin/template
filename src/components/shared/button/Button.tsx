import styled from '@emotion/styled'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>
}

export default Button

const Container = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
`
