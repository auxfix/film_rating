import { action } from 'typesafe-actions';
import { MovieListItem } from './MovieListItem/types';
import ActionTypes from './constants';

export const changeMovieName = (name: string) => action(ActionTypes.CHANGE_MOVIE_NAME, name);

export const loadMovies = () => action(ActionTypes.LOAD_MOVIES);
export const moviesLoaded = (movies: MovieListItem[]) =>
  action(ActionTypes.LOAD_MOVIES_SUCCESS, { movies: movies });
export const moviesLoadingError = (error: object) =>
  action(ActionTypes.LOAD_MOVIES_ERROR, error);
