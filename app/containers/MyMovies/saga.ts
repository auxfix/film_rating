import { call, put, select, takeLatest } from 'redux-saga/effects';
import { myMoviesLoaded, myMoviesLoadedError } from './actions';
import ActionTypes from './constants';
import API from 'api';


export function* getMyMovies() {
  try {
    const myMovies = yield call(API.MyMovie.getMyMovies);
    yield put(myMoviesLoaded(myMovies));
  } catch (err) {
    yield put(myMoviesLoadedError(err));
  }
}

export default function* myMoviesData() {
  yield takeLatest(ActionTypes.GET_MY_MOVIES, getMyMovies);
}
