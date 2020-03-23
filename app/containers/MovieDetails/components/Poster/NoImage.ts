import styled from 'styles/styled-components';
import { colors } from 'styles/vars';


export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 345px;
  border-radius: 5px;
  border: 2px solid ${colors.blue};
  padding: 7px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  color: ${colors.grey_blue};
  font-size: 23px;
`;
