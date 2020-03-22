import React from 'react';
import Input from './Input';



export interface Props {
  onPressEnter?: (text: string) => void;
  onChangeText: (text: string) => void;
  value: string;
}

function BigInput(props: Props) {

  const {
    onChangeText,
    onPressEnter,
    value,
  } = props;

  return (
    <Input
      value={value}
      onChange={(evt) => onChangeText(evt.target.value)}
    />
      );
}

export default BigInput;
