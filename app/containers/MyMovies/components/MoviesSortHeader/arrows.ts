import styled from 'styles/styled-components';
import { colors } from 'styles/vars';

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  margin-left: 5px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${colors.blue};
`;

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  margin-left: 5px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${colors.blue};
`;

export { ArrowUp, ArrowDown };
