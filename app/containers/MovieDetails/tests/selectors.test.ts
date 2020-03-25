import {
  makeSelectMovieDetails,
  makeSelectMovieDetailsError,
} from '../selectors';

describe('MovieDetails selectors', () => {
  it('makeSelectMovieDetails', () => {
    const selectDetailsSelector = makeSelectMovieDetails();
    const dt = {};
    const mockedState: any = {
      movieDetails: {
        movieDetails: dt,
      },
    };
    expect(selectDetailsSelector(mockedState)).toEqual(dt);
  });
  it('makeSelectMovieDetailsError', () => {
    const selectDetailsErrorSelector = makeSelectMovieDetailsError();
    const err = 'err_';
    const mockedState: any = {
      movieDetails: {
        error: err,
      },
    };
    expect(selectDetailsErrorSelector(mockedState)).toEqual(err);
  });
});
