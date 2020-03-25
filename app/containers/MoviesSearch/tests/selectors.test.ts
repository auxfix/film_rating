import {
  makeSelectSearchName,
  makeSelectMovies,
  makeSelectError,
  makeSelectTotalResults,
} from '../selectors';

describe('Movies Search selectors', () => {
  it('makeSelectSearchName', () => {
    const selectSearchName = makeSelectSearchName();
    const mockedState: any = {
      movieSearch: {
        moviename: 'name_',
      },
    };
    expect(selectSearchName(mockedState)).toEqual('name_');
  });
  it('makeSelectMovies', () => {
    const selectMovies = makeSelectMovies();
    const mvs = [{  Title: 'ttl', imdbID: '1'}];

    const mockedState: any = {
      movieSearch: {
        movies: mvs,
      },
    };
    expect(selectMovies(mockedState)).toEqual(mvs);
  });
  it('makeSelectError', () => {
    const selectError = makeSelectError();

    const mockedState: any = {
      movieSearch: {
        error: 'err_',
      },
    };
    expect(selectError(mockedState)).toEqual('err_');
  });
  it('makeSelectTotalResults', () => {
    const SelectTotalResults = makeSelectTotalResults();

    const mockedState: any = {
      movieSearch: {
        totalResults: 3,
      },
    };
    expect(SelectTotalResults(mockedState)).toEqual(3);
  });
});
