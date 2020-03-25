import { action } from 'typesafe-actions';
import {
  loadMovies,
  changeMovieName,
  moviesLoadingError,
  moviesLoaded,
} from '../actions';
import ActionTypes from '../constants';

describe('Movies Search Actions', () => {
  it('loadMovies', () => {
    const expectedResult = action(ActionTypes.LOAD_MOVIES, { page: 2 });

    expect(loadMovies(2)).toEqual(expectedResult);
  });
  it('changeMovieName', () => {
    const expectedResult = action(ActionTypes.CHANGE_MOVIE_NAME, 'title');

    expect(changeMovieName('title')).toEqual(expectedResult);
  });
  it('moviesLoadingError', () => {
    const expectedResult = action(ActionTypes.LOAD_MOVIES_ERROR, 'error');

    expect(moviesLoadingError('error')).toEqual(expectedResult);
  });
  it('moviesLoaded', () => {
    const pl = {
      Search: [],
      totalResults: 0,
    };
    const expectedResult = action(ActionTypes.LOAD_MOVIES_SUCCESS, pl);

    expect(moviesLoaded(pl)).toEqual(expectedResult);
  });
});
