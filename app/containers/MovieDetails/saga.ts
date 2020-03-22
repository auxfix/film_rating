import { call, put, takeLatest } from 'redux-saga/effects';
import { detailsLoaded, detailsLoadedError } from './actions';
import ActionTypes from './constants';
import API from 'api';


export function* getMovieDetails(action) {
  try {
    const details = yield call(API.MovieDB.getMovieDetails, action.payload);
    yield put(detailsLoaded(details || undefined));
  } catch (err) {
    yield put(detailsLoadedError(err));
  }
}


export default function* movieDetailsData() {
  yield takeLatest(ActionTypes.GET_DETAILS, getMovieDetails);
}
