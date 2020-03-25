import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import BigInput from '../index';


const testValue = 'test_input_value';
const testInputPlaceholder = 'placeholder';
 
const renderComponent = (props: any = {}) => {
  const utils = render(<BigInput {...props}/>);
  const input = utils.container.querySelector('input');
  return { ...utils, input };
};

describe('<BigInput />', () => {
  it('should render an <Input> tag', () => {
    const { input } = renderComponent();
    expect(input).toBeInTheDocument();
  });

  it('should have a placeholder attribute', () => {
    const { input } = renderComponent({placeholder: testInputPlaceholder});
    expect(input).toHaveAttribute('placeholder', testInputPlaceholder);
  });

  it('should have a value attribute', () => {
    const { input } = renderComponent({value: testValue});
    expect(input).toHaveAttribute('value', testValue);
  });


  it('should handle key press events', () => {
    const onKeyPressSpy = jest.fn();
    const { input } = renderComponent({ onPressEnter: onKeyPressSpy });
    if (input) {
        fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    }
    expect(onKeyPressSpy).toHaveBeenCalled();
  });

  it('should handle change events', () => {
    const onChangeSpy = jest.fn();
    const { input } = renderComponent({ onChangeText: onChangeSpy });
    if (input) {
        fireEvent.change(input, { target: { value: '23' } });
    }
    expect(onChangeSpy).toHaveBeenCalled();
  });
});

