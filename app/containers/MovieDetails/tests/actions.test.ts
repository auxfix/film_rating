import { action } from 'typesafe-actions';
import {
  saveRating,
  ratingWasChanged,
  ratingWasSaved,
  detailsLoadedError,
  detailsLoaded,
  getMovieDetails,
} from '../actions';
import ActionTypes from '../constants';
import { MovieDetails } from '../types';

describe('Movie Details Actions', () => {
  it('saveRating', () => {
    const expectedResult = action(ActionTypes.SAVE_RATING);

    expect(saveRating()).toEqual(expectedResult);
  });
  it('ratingWasChanged', () => {
    const expectedResult = action(ActionTypes.RATING_WAS_CHANGED, 5);

    expect(ratingWasChanged(5)).toEqual(expectedResult);
  });
  it('ratingWasSaved', () => {
    const expectedResult = action(ActionTypes.RATING_WAS_SAVED);

    expect(ratingWasSaved()).toEqual(expectedResult);
  });
  it('detailsLoadedError', () => {
    const expectedResult = action(ActionTypes.LOAD_DETAILS_ERROR, 'error');

    expect(detailsLoadedError('error')).toEqual(expectedResult);
  });
  it('detailsLoaded', () => {
    const details: MovieDetails = {
      Poster: '_',
      rating: 5,
      Year: '1987',
      Type: '_',
      Released: '_',
      Genre: '_',
      Country: '_',
      Title: 'Best Movie Ever',
      imdbID: '1',
    };
    const expectedResult = action(ActionTypes.LOAD_DETAILS_SUCCESS, details);

    expect(detailsLoaded(details)).toEqual(expectedResult);
  });
  it('getMovieDetails', () => {
    const expectedResult = action(ActionTypes.GET_DETAILS, 'id');

    expect(getMovieDetails('id')).toEqual(expectedResult);
  });
});
