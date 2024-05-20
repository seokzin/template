import styled from '@emotion/styled'

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
