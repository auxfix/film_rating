import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import MyMovieListItem from '../index';

const renderComponent = (props: any = {}) => {
  const utils = render(<MyMovieListItem {...props} />);
  const div = utils.container.querySelector('div');
  return { ...utils, div };
};

describe('<MyMovieListItem />', () => {
  it('should render an <div> tag', () => {
    const { div } = renderComponent({
      movie: {
        Title: '_',
        imdbID: '_',
        rating: 0,
      },
      onMovieClick: () => {},
    });
    expect(div).toBeInTheDocument();
  });

  it('should have right Title', () => {
    const testMovieTitle = 'TST_movie_title';

    const { div } = renderComponent({
      movie: {
        Title: testMovieTitle,
        imdbID: '_',
        rating: 0,
      },
      onMovieClick: () => {},
    });
    expect(div).toHaveTextContent(testMovieTitle);
  });

  it('on click handler get right id', () => {
    const onClickSpy = jest.fn();
    const tstID = 'imdb_ID';
    const { div } = renderComponent({
      movie: {
        Title: '_',
        imdbID: tstID,
        rating: 0,
      },
      onMovieClick: onClickSpy,
    });
    if (div) {
      fireEvent.click(div);
    }

    expect(onClickSpy).toHaveBeenCalledWith(tstID);
  });
});
