import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectMyMoviesState = (state: ApplicationRootState) => {
  return state.myMovies || initialState;
};

const makeSelectMyMovies = () =>
  createSelector(selectMyMoviesState, substate => {
    return substate.movies;
  });
const makeSelectMyMoviesSort = () =>
  createSelector(selectMyMoviesState, substate => {
    return substate.sort;
  });

export { selectMyMoviesState, makeSelectMyMovies };
