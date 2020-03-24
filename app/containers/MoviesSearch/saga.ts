import { call, put, select, takeLatest } from 'redux-saga/effects';
import { moviesLoaded, moviesLoadingError } from './actions';
import { setLoading } from 'containers/App/actions';
import ActionTypes from './constants';
import API from 'api';

import { makeSelectSearchName } from 'containers/MoviesSearch/selectors';

export function* getFilms(action) {
  const moviename = yield select(makeSelectSearchName());

  try {
    yield put(setLoading(true));
    if (!!moviename.trim()) {
      const searchResults = yield call(API.MovieDB.getMoviesByName, moviename, action.payload.page);
      if (searchResults.Response === 'True') {
        yield put(moviesLoaded(searchResults));
      } else {
        yield put(moviesLoadingError(searchResults.Error));
      }
    } else {
      yield put(moviesLoaded({
        Search: [],
        totalResults: 0,
      }));
    }
    yield put(setLoading(false));
  } catch (err) {
    yield put(moviesLoadingError(err.message));
    yield put(setLoading(false));
  }
}



export default function* moviesSearchData() {
  yield takeLatest(ActionTypes.LOAD_MOVIES, getFilms);
}
