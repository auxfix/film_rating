import React from 'react';
import Input from './Input';

export interface Props {
  onPressEnter?: (text: string) => void;
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
}

function BigInput(props: Props) {
  const { onChangeText, onPressEnter, value, placeholder } = props;

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      if (onPressEnter) {
        onPressEnter(value);
      }
    }
  };

  return (
    <Input
      value={value}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      onChange={evt => onChangeText(evt.target.value)}
    />
  );
}
export default BigInput;
