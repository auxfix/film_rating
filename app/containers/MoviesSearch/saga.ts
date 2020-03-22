import { call, put, select, takeLatest } from 'redux-saga/effects';
import { moviesLoaded, moviesLoadingError } from './actions';
import ActionTypes from './constants';
import API from 'api';

import { makeSelectSearchName } from 'containers/MoviesSearch/selectors';


export function* getFilms() {
  const moviename = yield select(makeSelectSearchName());

  try {
    const searchResults = yield call(API.MovieDB.getMoviesByName, moviename);
    yield put(moviesLoaded(searchResults));
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}



export default function* moviesSearchData() {
  yield takeLatest(ActionTypes.LOAD_MOVIES, getFilms);
}
