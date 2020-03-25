import { action } from 'typesafe-actions';
import {
  changeSorting,
  getMyMovies,
  myMoviesLoaded,
  myMoviesLoadedError,
} from '../actions';
import ActionTypes from '../constants';

describe('MyMovies Actions', () => {
  it('changeSorting', () => {
    const expectedResult = action(ActionTypes.CHANGE_SORTING, {
      field: 'f',
      order: 'ASC',
    });

    expect(changeSorting('f', 'ASC')).toEqual(expectedResult);
  });
  it('getMyMovies', () => {
    const expectedResult = action(ActionTypes.GET_MY_MOVIES);

    expect(getMyMovies()).toEqual(expectedResult);
  });
  it('myMoviesLoaded', () => {
    const expectedResult = action(ActionTypes.LOAD_MY_MOVIES_SUCCESS, {
      movies: [],
    });

    expect(myMoviesLoaded([])).toEqual(expectedResult);
  });
  it('myMoviesLoadedError', () => {
    const expectedResult = action(ActionTypes.LOAD_MY_MOVIES_ERROR, 'error');

    expect(myMoviesLoadedError('error')).toEqual(expectedResult);
  });
});
