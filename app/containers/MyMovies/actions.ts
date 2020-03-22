import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { MovieListItemType } from '../MoviesSearch/components/MovieListItem/types';

export const getMyMovies = () => action(ActionTypes.GET_MY_MOVIES);
export const myMoviesLoaded = (movies: MovieListItemType[]) =>
  action(ActionTypes.LOAD_MY_MOVIES_SUCCESS, { movies: movies });
export const myMoviesLoadedError = (error: object) =>
  action(ActionTypes.LOAD_MY_MOVIES_ERROR, error);
