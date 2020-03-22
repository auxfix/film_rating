import { action } from 'typesafe-actions';
import { MovieListItemType } from './MovieListItem/types';
import ActionTypes from './constants';

export const changeMovieName = (name: string) => action(ActionTypes.CHANGE_MOVIE_NAME, name);

export const loadMovies = () => action(ActionTypes.LOAD_MOVIES);
export const moviesLoaded = (searchResult: {
  Search: MovieListItemType[],
  totalResults: number,
}) => action(ActionTypes.LOAD_MOVIES_SUCCESS, searchResult);
export const moviesLoadingError = (error: object) =>
  action(ActionTypes.LOAD_MOVIES_ERROR, error);
