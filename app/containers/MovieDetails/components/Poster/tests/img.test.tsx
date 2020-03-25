import React from 'react';
import { render } from '@testing-library/react';

import Image from '../Img';

describe('Image', () => {
  it('should render an <img> tag', () => {
    const { container } = render(<Image/>);
    expect((container.firstChild as HTMLElement).tagName).toEqual('IMG');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Image/>);
    expect((container.firstChild as HTMLElement).hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Image id={id} />);
    expect((container.firstChild! as HTMLElement).hasAttribute('id')).toBe(true);
    expect((container.firstChild! as HTMLElement).id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const InvalidItem = Image as any;
    const { container } = render(<InvalidItem attribute="test" />);
    expect((container.firstChild! as HTMLElement).hasAttribute('attribute')).toBe(false);
  });
});

