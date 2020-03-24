import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { MovieDetails } from './types';

export const getMovieDetails = (id: string) => action(ActionTypes.GET_DETAILS, id);

export const detailsLoaded = (details: MovieDetails) =>
  action(ActionTypes.LOAD_DETAILS_SUCCESS, details);
export const detailsLoadedError = (error: string) =>
  action(ActionTypes.LOAD_DETAILS_ERROR, error);

export const ratingWasChanged = (rating: number) =>
  action(ActionTypes.RATING_WAS_CHANGED, rating);
export const saveRating = () => action(ActionTypes.SAVE_RATING);
export const ratingWasSaved = () => action(ActionTypes.RATING_WAS_SAVED);
