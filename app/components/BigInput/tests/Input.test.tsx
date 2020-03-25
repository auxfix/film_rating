import React from 'react';
import { render } from '@testing-library/react';

import Input from '../Input';

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const { container } = render(<Input/>);
    expect((container.firstChild! as HTMLElement).tagName).toEqual('INPUT');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Input />);
    expect((container.firstChild! as HTMLElement).hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Input id={id} />);
    expect((container.firstChild! as HTMLElement).hasAttribute('id')).toBe(true);
    expect((container.firstChild! as HTMLElement).id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const InvalidItem = Input as any;
    const { container } = render(<InvalidItem attribute="test" />);
    expect((container.firstChild! as HTMLElement).hasAttribute('attribute')).toBe(false);
  });
});