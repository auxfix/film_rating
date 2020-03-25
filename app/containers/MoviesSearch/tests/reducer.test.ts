import searchMovieReducer from '../reducer';
import {
  moviesLoaded,
  moviesLoadingError,
  changeMovieName,
} from '../actions';
import { ContainerState } from '../types';

describe('Movies Search Reducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      moviename: '',
      movies: [],
      totalResults: 0,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(searchMovieReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the changeMovieName action correctly', () => {
    const expectedResult = {
      moviename: 'one',
      movies: [],
      totalResults: 0,
      error: undefined,
    };
    expect(searchMovieReducer(state, changeMovieName('one'))).toEqual(expectedResult);
  });

  it('should handle the moviesLoaded action correctly', () => {
    const pl = {
      Search: [{  Title: 'ttl', imdbID: '1'}],
      totalResults: 1,
    };

    const expectedResult = {
      moviename: '',
      movies: pl.Search,
      totalResults: pl.totalResults,
      error: undefined,
    };
    expect(searchMovieReducer(state, moviesLoaded(pl))).toEqual(expectedResult);
  });

  it('should handle the moviesLoadingError action correctly', () => {
    const expectedResult = {
      moviename: '',
      movies: [],
      totalResults: 0,
      error: 'err_',
    };
    expect(searchMovieReducer(state, moviesLoadingError('err_'))).toEqual(expectedResult);
  });
});
