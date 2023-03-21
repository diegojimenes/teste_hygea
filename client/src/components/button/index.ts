import styled from 'styled-components'

const Button = styled.button<{ size: 'large' | 'small' | 'mid' }>`
  font-size: 1.5em;
  text-align: center;
  width: ${(props) => props.theme.button.size[props.size].width};
  height: ${(props) => props.theme.button.size[props.size].height};;
  color: ${props => (props.theme.colors.border)};
  background: ${props => (props.theme.colors.primary)};
  border: 2px solid ${props => (props.theme.colors.border)};
  border-radius: 5px;
`

export default Button