import { call, put, takeLatest, select } from 'redux-saga/effects';
import { detailsLoaded, detailsLoadedError, ratingWasSaved } from './actions';
import ActionTypes from './constants';
import API from 'api';

import { makeSelectMovieDetails } from 'containers/MovieDetails/selectors';


export function* getMovieDetails(action) {
  try {
    const details = yield call(API.MovieDB.getMovieDetails, action.payload);
    const myMovieDetails = yield call(API.MyMovie.getMyMovieById, action.payload);
    if (myMovieDetails) {
      details.rating = myMovieDetails.rating;
    }
    yield put(detailsLoaded(details || undefined));
  } catch (err) {
    yield put(detailsLoadedError(err));
  }
}

export function* saveMovieDetails() {
  try {
    const details = yield select(makeSelectMovieDetails());
    yield call(API.MyMovie.saveMyMovie, details);
    yield put(ratingWasSaved());
  } catch (err) {
    yield put(detailsLoadedError(err));
  }
}


export default function* movieDetailsData() {
  yield takeLatest(ActionTypes.GET_DETAILS, getMovieDetails);
  yield takeLatest(ActionTypes.SAVE_RATING, saveMovieDetails);
}
