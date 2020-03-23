import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { MyMovieListItemType } from './types';

export const getMyMovies = () => action(ActionTypes.GET_MY_MOVIES);
export const myMoviesLoaded = (movies: MyMovieListItemType[]) =>
  action(ActionTypes.LOAD_MY_MOVIES_SUCCESS, { movies: movies });
export const myMoviesLoadedError = (error: object) =>
  action(ActionTypes.LOAD_MY_MOVIES_ERROR, error);
export const changeSorting = (field: string, order: string) =>
  action(ActionTypes.CHANGE_SORTING, { field, order });
