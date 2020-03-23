import styled from 'styles/styled-components';
import { colors } from 'styles/vars';


export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.blue};
  border-top: 1px solid ${colors.blue};
  border-bottom: 1px solid ${colors.blue};
`;
