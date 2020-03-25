import myMoviesReducer from '../reducer';
import {
  myMoviesLoaded,
  myMoviesLoadedError,
  changeSorting,
} from '../actions';
import { ContainerState } from '../types';
import { Sort } from '../constants';

describe('My Movies Reducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      movies: [],
      sort: {
        field: Sort.NAME,
        order: Sort.ASC,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(myMoviesReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the myMoviesLoaded action correctly', () => {
    const mv = {
      Title: 'ttl',
      imdbID: 'id',
      rating: 5,
    };

    const expectedResult = {
      movies: [mv],
      sort: {
        field: Sort.NAME,
        order: Sort.ASC,
      },
    };
    expect(myMoviesReducer(state, myMoviesLoaded([mv]))).toEqual(expectedResult);
  });

  it('should handle the myMoviesLoadedError action correctly', () => {
    const expectedResult = {
      movies: [],
      sort: {
        field: Sort.NAME,
        order: Sort.ASC,
      },
      error: 'err_',
    };
    expect(myMoviesReducer(state, myMoviesLoadedError('err_'))).toEqual(expectedResult);
  });

  it('should handle the changeSorting action correctly', () => {
    const expectedResult = {
      movies: [],
      sort: {
        field: Sort.RATING,
        order: Sort.DSC,
      },
      error: undefined,
    };
    expect(myMoviesReducer(state, changeSorting(Sort.RATING, Sort.DSC))).toEqual(expectedResult);
  });
});
