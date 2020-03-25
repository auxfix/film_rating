import React from 'react';
import { render } from '@testing-library/react';

import NoImage from '../NoImage';

describe('NoImage', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<NoImage/>);
    expect((container.firstChild! as HTMLElement).tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const { container } = render(<NoImage/>);
    expect((container.firstChild! as HTMLElement).hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<NoImage id={id} />);
    expect((container.firstChild! as HTMLElement).hasAttribute('id')).toBe(true);
    expect((container.firstChild! as HTMLElement).id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const InvalidItem = NoImage as any;
    const { container } = render(<InvalidItem attribute="test" />);
    expect((container.firstChild! as HTMLElement).hasAttribute('attribute')).toBe(false);
  });
});

