import { call, put, select, takeLatest } from 'redux-saga/effects';
import { moviesLoaded, moviesLoadingError } from './actions';
import ActionTypes from './constants';
import API from 'api';

import { makeSelectSearchName } from 'containers/MoviesSearch/selectors';
import { MovieListItemType } from './components/MovieListItem/types';


export function* getFilms(action) {
  const moviename = yield select(makeSelectSearchName());

  try {
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
  } catch (err) {
    yield put(moviesLoadingError(err.message));
  }
}



export default function* moviesSearchData() {
  yield takeLatest(ActionTypes.LOAD_MOVIES, getFilms);
}
