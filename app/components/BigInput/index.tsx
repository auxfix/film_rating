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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (onPressEnter) {
        onPressEnter(value);
      }
    }
  }


  return (
    <Input
      value={value}
      onKeyPress={handleKeyPress}
      onChange={(evt) => onChangeText(evt.target.value)}
    />
      );
}

export default BigInput;
