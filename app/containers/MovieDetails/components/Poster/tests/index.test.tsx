import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Poster from '../index';

const renderComponent = (props: any = {}) => {
  const utils = render(<Poster {...props} />);
  const div = utils.container.querySelector('div');
  return { ...utils, div };
};

describe('<MyMovieListItem />', () => {
  it('should have right src tag', () => {
    const imgSrc = 'img.png';

    const { div } = renderComponent({
      src: imgSrc,
    });

    let img;
    if (div) {
      img = div.querySelector('img');
    }

    expect((img as HTMLElement).getAttribute('src')).toBe(imgSrc);
  });
  it('no image case', () => {

    const { div } = renderComponent({
      src: 'N/A',
    });

    let img;
    if (div) {
      img = div.querySelector('img');
    }

    expect(img).toBeFalsy();
  });
});
