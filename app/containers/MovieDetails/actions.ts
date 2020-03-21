import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { MovieDetails } from './types';

export const getMovieDetails = (id: string) => action(ActionTypes.GET_DETAILS, id);

export const detailsLoaded = (details: MovieDetails) =>
  action(ActionTypes.LOAD_DETAILS_SUCCESS, details);
export const detailsLoadedError = (error: object) =>
  action(ActionTypes.LOAD_DETAILS_ERROR, error);
