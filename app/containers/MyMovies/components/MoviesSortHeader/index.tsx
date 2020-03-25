import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styles/styled-components';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import { Sort } from '../../constants';
import { ArrowDown, ArrowUp } from './arrows';
import messages from './messages';

export const ClickWrapper = styled.div`
  cursor: pointer;
`;

function getNameArrow(field: string, order: string) {
  if (field === Sort.RATING) {
    return null;
  }
  return order === Sort.ASC ? <ArrowUp /> : <ArrowDown />;
}

function getRatingArrow(field: string, order: string) {
  if (field === Sort.NAME) {
    return null;
  }
  return order === Sort.ASC ? <ArrowUp /> : <ArrowDown />;
}

function nameClickHandler(
  order: string,
  clickHandler: (field: string, order: string) => void,
) {
  const orderToPass = order === Sort.ASC ? Sort.DSC : Sort.ASC;
  clickHandler(Sort.NAME, orderToPass);
}

function ratingClickHandler(
  order: string,
  clickHandler: (field: string, order: string) => void,
) {
  const orderToPass = order === Sort.ASC ? Sort.DSC : Sort.ASC;
  clickHandler(Sort.RATING, orderToPass);
}

interface Props {
  filed: string;
  order: string;
  onClickHandler: (field: string, order: string) => void;
}
function MoviesSortHeader(props: Props) {
  const { filed, order, onClickHandler } = props;

  return (
    <Wrapper>
      <ClickWrapper onClick={() => nameClickHandler(order, onClickHandler)}>
        <Flex alignItems="center">
          <span>
            <FormattedMessage {...messages.name} />
          </span>
          {getNameArrow(filed, order)}
        </Flex>
      </ClickWrapper>
      <ClickWrapper onClick={() => ratingClickHandler(order, onClickHandler)}>
        <Flex alignItems="center">
          <span>
            <FormattedMessage {...messages.rating} />
          </span>
          {getRatingArrow(filed, order)}
        </Flex>
      </ClickWrapper>
    </Wrapper>
  );
}

export default MoviesSortHeader;
