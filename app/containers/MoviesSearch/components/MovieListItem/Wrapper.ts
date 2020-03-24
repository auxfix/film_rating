import styled from 'styles/styled-components';
import { colors } from 'styles/vars';


export default styled.div`
  &:hover {
    background-color: ${colors.blue_hover};
  }
  display: flex;
  min-height: 50px;
  justify-content: flex-start;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.grey_blue};
  width: 100%;
  padding-top: 15px;
  cursor: pointer;
  border-bottom: 2px solid ${colors.blue};
`;
