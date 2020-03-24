import styled from 'styles/styled-components';
import { colors } from 'styles/vars';

const Input = styled.input`
  outline: none;
  background-color: transparent;
  padding: 0.25em 2em;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  text-transform: uppercase;
  height: 60px;
  border-radius: 4px;
  border: 2px solid ${colors.blue};
  color: ${colors.grey_blue};
`;

export default Input;
