import * as React from 'react';
import { Flex } from '@rebass/grid';
import Label from './Label';
import Text from './Text';
import Wrapper from './Wrapper';

interface Props {
  label: string;
  detail: string;
}
function Detail(props: Props) {
  const { label, detail } = props;
  return (
    <Wrapper>
      <Flex alignItems="center" width={1} justifyContent="space-between">
        <Label>{label}</Label>
        <Text>{detail}</Text>
      </Flex>
    </Wrapper>
  );
}

export default Detail;
