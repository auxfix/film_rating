import {
  makeSelectMyMovies,
  makeSelectMyMoviesSort,
  makeSelectMyMoviesError,
} from '../selectors';

describe('My Movies selectors', () => {
  it('makeSelectMyMovies', () => {
    const selectMyMovies = makeSelectMyMovies();

    const mv = {
      Title: 'ttl',
      imdbID: '1',
      rating: '5',
    };

    const mockedState: any = {
      myMovies: {
        movies: [mv],
      },
    };
    expect(selectMyMovies(mockedState)).toEqual([mv]);
  });
  it('makeSelectMyMoviesSort', () => {
    const selectMyMoviesSort = makeSelectMyMoviesSort();
    const str = { order: 'ASC', field: 'f' };
    const mockedState: any = {
      myMovies: {
        sort: str,
      },
    };
    expect(selectMyMoviesSort(mockedState)).toEqual(str);
  });
  it('makeSelectMyMoviesError', () => {
    const selectMyMoviesError = makeSelectMyMoviesError();
    const mockedState: any = {
      myMovies: {
        error: 'err_',
      },
    };
    expect(selectMyMoviesError(mockedState)).toEqual('err_');
  });
});
